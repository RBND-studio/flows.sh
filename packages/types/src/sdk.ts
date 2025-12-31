export type ActionValue = {
  label: string;
  url?: string | null;
  openInNew?: boolean;
  exitNode?: string | null;
};

export type StateMemoryPropertyMetaTrigger = {
  type: string;
  blockId?: string | null;
  blockKey?: string | null;
};

export type PropertyMeta = {
  key: string;
  type: string;
  value?: unknown;
  triggers?: StateMemoryPropertyMetaTrigger[] | null;
};

type TourTriggerExpression = {
  type: string;
  value?: string | null;
  values?: string[] | null;
  operator?: string | null;
};

type TourTrigger = {
  $and?: TourTriggerExpression[];
};

export type SDKBlockTourPageWait = {
  operator: string;
  value: string[];
};

export type SDKBlockTourWait = {
  interaction?: string | null;
  element?: string | null;
  page?: SDKBlockTourPageWait | null;
  ms?: number | null;
};

export type SDKTourBlock = {
  id: string;
  workflowId: string;
  key?: string | null;
  type: string;
  componentType?: string | null;
  data: Record<string, unknown>;
  propertyMeta: PropertyMeta[];

  slottable: boolean;
  slotId?: string | null;
  slotIndex?: number | null;

  page_targeting_operator?: string | null;
  page_targeting_values?: string[] | null;

  tourWait?: SDKBlockTourWait | null;
};

export type SDKBlock = {
  id: string;
  workflowId: string;
  key?: string | null;
  type: string;
  componentType?: string | null;
  data: Record<string, unknown>;
  propertyMeta: PropertyMeta[];
  exitNodes: string[];

  slottable: boolean;
  slotId?: string | null;
  slotIndex?: number | null;

  page_targeting_operator?: string | null;
  page_targeting_values?: string[] | null;
  tour_trigger?: TourTrigger | null;

  tourBlocks?: SDKTourBlock[];
  currentTourIndex?: number | null;
};
