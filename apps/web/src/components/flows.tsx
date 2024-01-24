"use client";

import "@flows/js/flows.css";

import type { FlowsOptions } from "@flows/js";
import { endFlow, init } from "@flows/js";
import { usePrevious } from "hooks";
import type { FC, ReactNode } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Props = FlowsOptions & {
  children?: ReactNode;
};

const FlowsContext = createContext<{ runningFlowIds: string[] }>({ runningFlowIds: [] });
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- not needed
export const useFlowsContext = () => useContext(FlowsContext);

export const Flows: FC<Props> = ({ children, ...options }) => {
  const [runningFlowIds, setRunningFlowIds] = useState<string[]>([]);

  useEffect(() => {
    void init({
      ...options,
      tracking: (event) =>
        setRunningFlowIds((prev) => {
          if (event.type === "startFlow") return [...prev, event.flowId];
          if (event.type === "finishFlow" || event.type === "cancelFlow")
            return prev.filter((id) => id !== event.flowId);
          return prev;
        }),
    });
    return () => {
      void init({ flows: [] });
    };
  }, [options]);

  const flowIds = useMemo(() => (options.flows ?? []).map((f) => f.id), [options.flows]);
  const prevFlowIds = usePrevious(flowIds);
  const flowIdsChanged = prevFlowIds && flowIds.toString() !== prevFlowIds.toString();

  useEffect(() => {
    prevFlowIds?.forEach((id) => endFlow(id));
    return () => flowIds.forEach((id) => endFlow(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only run on flowIds change
  }, [flowIdsChanged]);

  return <FlowsContext.Provider value={{ runningFlowIds }}>{children}</FlowsContext.Provider>;
};
