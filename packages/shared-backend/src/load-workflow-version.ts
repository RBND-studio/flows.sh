import {
  blockPropertyValues,
  blocks,
  type createKeyvInstance,
  type db,
  workflowVersions,
} from "db";
import { eq, inArray, isNull, or } from "drizzle-orm";

import { blockTypesNeededForSdkBlockDto } from "./block-to-sdk-block-dto";
import { type SDKWorkflow } from "./sdk.workflow.entity";

export type WorkflowVersionData = Pick<SDKWorkflow, "blocks" | "paths"> & {
  workflow_version_id: string;
};

export const getWorkflowVersionData =
  (workflowVersionId: string, defaultLanguageId: string, languageId?: string | null) =>
  async (services: {
    db: ReturnType<typeof db>;
    redis: ReturnType<typeof createKeyvInstance>;
  }): Promise<WorkflowVersionData | null> => {
    const cacheKey = `workflow_version_sdk_data:${workflowVersionId}:${defaultLanguageId}:${languageId}`;
    const cachedValue = await services.redis.get<WorkflowVersionData>(cacheKey);
    if (cachedValue) return cachedValue;

    const propertyValueConditions = [
      isNull(blockPropertyValues.language_id),
      eq(blockPropertyValues.language_id, defaultLanguageId),
    ];
    if (languageId && languageId !== defaultLanguageId) {
      propertyValueConditions.push(eq(blockPropertyValues.language_id, languageId));
    }

    const result = await services.db.query.workflowVersions.findFirst({
      where: eq(workflowVersions.id, workflowVersionId),
      columns: {
        version_number: true,
      },
      with: {
        blocks: {
          where: inArray(blocks.type, blockTypesNeededForSdkBlockDto),
          columns: {
            id: true,
            block_key: true,
            type: true,
            slot_id: true,
            slottable: true,
            slot_index: true,
            page_targeting_operator: true,
            page_targeting_value: true,
            tour_wait: true,
            component_type: true,
            tour_block_id: true,
            tour_index: true,
            tour_trigger: true,
          },
          with: {
            properties: { columns: { id: true, parent_id: true, key: true, type: true } },
            propertyValues: {
              where: or(...propertyValueConditions),
              columns: {
                id: true,
                string_value: true,
                number_value: true,
                boolean_value: true,
                json_value: true,
                value_block_id: true,
                exit_node_value_id: true,
                language_id: true,
                block_property_id: true,
                array_block_property_value_id: true,
                array_index: true,
              },
            },
            translations: { columns: { language_id: true } },
            exit_nodes: { columns: { id: true, key: true } },
          },
        },
        paths: { columns: { from_block_id: true, block_property_value_id: true } },
      },
    });

    if (!result) return null;

    const versionData: WorkflowVersionData = { ...result, workflow_version_id: workflowVersionId };

    // Do not cache data of draft version
    if (result.version_number !== 0) void services.redis.set(cacheKey, versionData, 60_000);

    return versionData;
  };
