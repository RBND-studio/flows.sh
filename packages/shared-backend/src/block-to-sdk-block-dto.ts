import {
  type ActionLogicJsonValue,
  type ActionTranslatableJsonValue,
  type ActionValue,
  type BlockType,
  type SDKBlock,
  type SDKTourBlock,
  type StateMemoryPropertyMetaTrigger,
  type StateMemoryValue,
} from "@flows/types";
import { get, set, update } from "es-toolkit/compat";
import { primitivePropertyTypes } from "shared";

import {
  type SDKBlockData,
  type SDKBlockPath,
  type SDKBlockProperty,
  type SDKBlockPropertyValue,
  type SDKBlockState,
  type SDKWorkflow,
} from "./sdk.workflow.entity";

const getPrimitivePropertyValue = ({
  property,
  propertyValue,
}: {
  property: SDKBlockProperty;
  propertyValue: SDKBlockPropertyValue;
}): string | number | boolean | null => {
  if (property.type === "string" || property.type === "select") return propertyValue.string_value;
  if (property.type === "number") return propertyValue.number_value;
  if (property.type === "boolean") return propertyValue.boolean_value;
  return null;
};

const getActionValue = ({
  block,
  propertyValue,
  property,
  paths,
  selector,
}: {
  property: SDKBlockProperty;
  propertyValue: SDKBlockPropertyValue;
  selector: string;
  block: SDKBlockData;
  paths: SDKBlockPath[];
}): ActionValue | undefined => {
  const logicPropertyValue = block.propertyValues.find((pv) => {
    const arrayItemMatch = propertyValue.array_block_property_value_id
      ? pv.array_block_property_value_id === propertyValue.array_block_property_value_id
      : true;
    return !pv.language_id && pv.block_property_id === property.id && arrayItemMatch;
  });
  const logicJsonValue = logicPropertyValue?.json_value as ActionLogicJsonValue | undefined;
  const translatableJsonValue = propertyValue.json_value as ActionTranslatableJsonValue | undefined;

  const isTourStep = !!block.tour_block_id;
  const exitNodeKey = (() => {
    if (isTourStep) {
      return logicJsonValue?.exitNodeKey;
    }
    if (logicPropertyValue?.exit_node_value_id) {
      return block.exit_nodes.find((en) => en.id === logicPropertyValue.exit_node_value_id)?.key;
    }
    const hasConnectedPaths = paths.some(
      (p) => p.from_block_id === block.id && p.block_property_value_id === logicPropertyValue?.id,
    );
    if (hasConnectedPaths) {
      return selector;
    }
  })();

  const url = translatableJsonValue?.url;

  if (!exitNodeKey && !url) return;

  const result: ActionValue = {
    label: propertyValue.string_value ?? "",
    url,
    exitNode: exitNodeKey,
    openInNew: logicJsonValue?.openInNew,
  };

  return result;
};

const defineArraysAndArrayItems = ({
  data,
  propertiesById,
  property,
  propertyValue,
  propertyValuesById,
  block,
}: {
  data: Record<string, unknown>;
  block: SDKBlockData;
  property: SDKBlockProperty;
  propertyValue: SDKBlockPropertyValue;
  propertiesById: Map<string, SDKBlockProperty>;
  propertyValuesById: Map<string, SDKBlockPropertyValue>;
}): void => {
  const parentSelector = getPropertySelector({
    propertiesById,
    property,
    propertyValue,
    propertyValuesById,
  });
  const arrayItemSelector = `${parentSelector}.${propertyValue.array_index}`;
  // Set empty object for the array item
  update(data, arrayItemSelector, (v: Record<string, unknown> | undefined) => v ?? {});

  const childArrayProperties = block.properties.filter(
    (p) => p.parent_id === property.id && p.type === "array",
  );
  for (const childArrayProp of childArrayProperties) {
    // Set empty array for child array properties
    update(
      data,
      `${arrayItemSelector}.${childArrayProp.key}`,
      (v: unknown[] | undefined) => v ?? [],
    );
  }
};

const tourStepToBlockDto = ({
  block,
  workflowId,
  languageId,
  defaultLanguageId,
}: {
  block: SDKBlockData;
  workflowId: string;
  languageId?: string;
  defaultLanguageId: string;
}): SDKTourBlock => {
  const propertiesById = new Map(block.properties.map((p) => [p.id, p]));
  const propertyValuesById = new Map(block.propertyValues.map((p) => [p.id, p]));
  const resolvedLanguageId =
    languageId && block.translations.some((t) => t.language_id === languageId)
      ? languageId
      : defaultLanguageId;

  const data: SDKTourBlock["data"] = {};
  const propertyMeta: SDKTourBlock["propertyMeta"] = [];

  block.properties.forEach((property) => {
    // Initialize array properties with an empty array
    // Otherwise if there are no array items, the array wouldn't be in the data object
    // The nested array are initialized below
    if (property.type === "array" && !property.parent_id) {
      data[property.key] = [];
    }
  });

  block.propertyValues.forEach((propertyValue) => {
    const property = propertiesById.get(propertyValue.block_property_id);
    if (!property) return;

    const isPrimitiveProperty = primitivePropertyTypes.includes(property.type);

    if (propertyValue.language_id === resolvedLanguageId && isPrimitiveProperty) {
      const selector = getPropertySelector({
        propertiesById,
        property,
        propertyValue,
        propertyValuesById,
      });

      const value = getPrimitivePropertyValue({ property, propertyValue });
      set(data, selector, value);
    }

    if (property.type === "action" && propertyValue.language_id === resolvedLanguageId) {
      const selector = getPropertySelector({
        propertiesById,
        property,
        propertyValue,
        propertyValuesById,
      });
      const actionValue = getActionValue({
        property,
        propertyValue,
        block,
        selector,
        // Tour steps doesn't support block triggers
        paths: [],
      });
      if (!actionValue) return;

      propertyMeta.push({
        key: selector,
        type: property.type,
        value: actionValue,
      });
    }

    if (property.type === "array") {
      defineArraysAndArrayItems({
        block,
        data,
        propertiesById,
        property,
        propertyValue,
        propertyValuesById,
      });
    }
  });

  return {
    id: block.id,
    workflowId,
    key: block.block_key,
    data,
    propertyMeta,
    type: block.type,
    componentType: block.component_type,
    slottable: block.slottable,
    slotId: block.slot_id,
    slotIndex: block.slot_index,
    page_targeting_operator: block.page_targeting_operator,
    page_targeting_values: block.page_targeting_value,
    tourWait: block.tour_wait,
  };
};

const tourBlockToBlockDto = (props: Props): SDKBlock | undefined => {
  const block = props.workflow.blocks.find((b) => b.id === props.blockId);
  if (!block) return;

  const sortedTourBlocks = props.workflow.blocks
    .filter((b) => b.tour_block_id === props.blockId)
    .sort((a, b) => (a.tour_index ?? 0) - (b.tour_index ?? 0));

  const tour_trigger: SDKBlock["tour_trigger"] = (() => {
    // If the tour trigger is not set, we return undefined
    if (!block.tour_trigger?.expressions.length) return;

    return { $and: block.tour_trigger.expressions };
  })();

  return {
    id: props.blockId,
    workflowId: props.workflowId,
    key: block.block_key,
    type: block.type,
    data: {},
    propertyMeta: [],
    slottable: block.slottable,
    exitNodes: block.exit_nodes.map((exitNode) => exitNode.key),
    currentTourIndex: props.blockState?.data?.current_tour_index as number | undefined,
    tour_trigger,
    tourBlocks: sortedTourBlocks.map((tourStep) =>
      tourStepToBlockDto({
        block: tourStep,
        workflowId: props.workflowId,
        languageId: props.languageId,
        defaultLanguageId: props.defaultLanguageId,
      }),
    ),
  };
};

type Props = {
  workflow: SDKWorkflow;
  blockState?: SDKBlockState;
  blockId: string;
  withBlockState: boolean;
  workflowId: string;
  languageId?: string;
  defaultLanguageId: string;
};

export const blockTypesNeededForSdkBlockDto: BlockType[] = [
  "component",
  "tour",
  "tour-component",
  "wait",
];

export const blockToSdkBlockDto = (props: Props): SDKBlock | undefined => {
  const blocksById = new Map(props.workflow.blocks.map((block) => [block.id, block]));

  const block = blocksById.get(props.blockId);
  if (!block) return;

  if (block.type === "tour") return tourBlockToBlockDto(props);
  if (block.type !== "component") return;

  const componentType = block.component_type;
  if (!componentType) return;

  const propertiesById = new Map(block.properties.map((p) => [p.id, p]));
  const propertyValuesById = new Map(block.propertyValues.map((p) => [p.id, p]));
  const resolvedLanguageId =
    props.languageId && block.translations.some((t) => t.language_id === props.languageId)
      ? props.languageId
      : props.defaultLanguageId;

  const data: SDKBlock["data"] = {};
  const propertyMeta: SDKBlock["propertyMeta"] = [];

  block.properties.forEach((property) => {
    // Initialize array properties with an empty array
    // Otherwise if there are no array items, the array wouldn't be in the data object
    // The nested array are initialized below
    if (property.type === "array" && !property.parent_id) {
      data[property.key] = [];
    }
  });

  block.propertyValues.forEach((propertyValue) => {
    const property = propertiesById.get(propertyValue.block_property_id);
    if (!property) return;

    const isPrimitiveProperty = primitivePropertyTypes.includes(property.type);
    if (propertyValue.language_id === resolvedLanguageId && isPrimitiveProperty) {
      const selector = getPropertySelector({
        propertiesById,
        property,
        propertyValue,
        propertyValuesById,
      });

      const value = getPrimitivePropertyValue({ property, propertyValue });
      set(data, selector, value);
    }

    if (property.type === "block-trigger") {
      const isConnected = props.workflow.paths.some(
        (path) =>
          path.from_block_id === block.id && path.block_property_value_id === propertyValue.id,
      );
      if (isConnected) {
        const selector = getPropertySelector({
          property,
          propertyValue,
          propertiesById,
          propertyValuesById,
        });
        const exitNodesSelector = [...selector.split(".").slice(0, -1), "f__exit_nodes"].join(".");
        const exitNodes = get(data, exitNodesSelector, []) as string[];
        exitNodes.push(property.key);
        set(data, exitNodesSelector, exitNodes);
      }
    }

    if (property.type === "state-memory") {
      const selector = getPropertySelector({
        property,
        propertyValue,
        propertiesById,
        propertyValuesById,
      });
      const stateMemoryValue = props.blockState?.data?.[propertyValue.id];
      const value = propertyValue.json_value as StateMemoryValue;
      const triggers = ((): StateMemoryPropertyMetaTrigger[] => {
        if (!value?.trigger) return [];
        const blockId = value.trigger === "transition" ? propertyValue.value_block_id : undefined;
        const blockKey = blockId ? blocksById.get(blockId)?.block_key : undefined;
        return [{ type: value.trigger, blockId, blockKey }];
      })();
      propertyMeta.push({
        key: selector,
        type: property.type,
        value: typeof stateMemoryValue === "boolean" ? stateMemoryValue : false,
        triggers,
      });
    }

    if (property.type === "block-state") {
      const targetBlockId = propertyValue.value_block_id;

      if (targetBlockId) {
        const selector = getPropertySelector({
          property,
          propertyValue,
          propertiesById,
          propertyValuesById,
        });
        const targetBlockState = props.workflow.blockStates.find(
          (bs) => bs.block_id === targetBlockId,
        );
        const targetBlockDto = blockToSdkBlockDto({
          ...props,
          blockId: targetBlockId,
          blockState: targetBlockState,
          withBlockState: false,
        });
        propertyMeta.push({
          key: selector,
          type: property.type,
          value: targetBlockDto,
        });
      }
    }

    if (property.type === "action" && propertyValue.language_id === resolvedLanguageId) {
      const selector = getPropertySelector({
        propertiesById,
        property,
        propertyValue,
        propertyValuesById,
      });
      const actionValue = getActionValue({
        property,
        propertyValue,
        block,
        paths: props.workflow.paths,
        selector,
      });
      if (!actionValue) return;

      propertyMeta.push({
        key: selector,
        type: property.type,
        value: actionValue,
      });
    }

    if (property.type === "array") {
      defineArraysAndArrayItems({
        block,
        data,
        propertiesById,
        property,
        propertyValue,
        propertyValuesById,
      });
    }
  });

  return {
    id: props.blockId,
    workflowId: props.workflowId,
    key: block.block_key,
    type: block.type,
    componentType,
    propertyMeta,
    slottable: block.slottable,
    slotId: block.slot_id,
    slotIndex: block.slot_index,
    page_targeting_operator: block.page_targeting_operator,
    page_targeting_values: block.page_targeting_value,
    data,
    exitNodes: block.exit_nodes.map((exitNode) => exitNode.key),
  };
};

const getPropertySelector = (props: {
  property: SDKBlockProperty;
  propertyValue: SDKBlockPropertyValue;
  propertiesById: Map<string, SDKBlockProperty>;
  propertyValuesById: Map<string, SDKBlockPropertyValue>;
}): string => {
  const { propertiesById, property, propertyValuesById } = props;

  const segments = [property.key];

  const prependArraySelector = (propertyValue: SDKBlockPropertyValue): void => {
    if (propertyValue.array_block_property_value_id) {
      const arrayItemPropertyValue = propertyValuesById.get(
        propertyValue.array_block_property_value_id,
      );

      if (arrayItemPropertyValue) {
        const arrayProperty = propertiesById.get(arrayItemPropertyValue.block_property_id);
        if (arrayItemPropertyValue.array_index !== null && arrayProperty) {
          const arrayIndex = arrayItemPropertyValue.array_index.toString();
          segments.unshift(arrayIndex);
          segments.unshift(arrayProperty.key);
        }

        prependArraySelector(arrayItemPropertyValue);
      }
    }
  };

  prependArraySelector(props.propertyValue);

  return segments.join(".");
};
