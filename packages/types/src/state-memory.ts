export type StateMemoryTrigger = "manual" | "transition";
export type StateMemoryJsonValue = {
  trigger?: StateMemoryTrigger;
};
export type StateMemoryValue = StateMemoryJsonValue | null;
