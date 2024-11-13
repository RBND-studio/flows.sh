import { cva, cx } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import {
  Banner16,
  Checklist16,
  Exit16,
  Filter16,
  Hint16,
  Modal16,
  Start16,
  Tooltip16,
  Tour16,
} from "icons";
import { type FC, type SVGProps } from "react";
import { forwardRef, useMemo } from "react";

import { Icon } from "../icon";

export type IconCmp = FC<SVGProps<SVGSVGElement>>;

export const builtInBlockIcons: Record<string, IconCmp> = {
  start: Start16,
  tour: Tour16,
  end: Exit16,
  filter: Filter16,
};

export const customIconOptions: Record<string, IconCmp> = {
  modal: Modal16,
  banner: Banner16,
  tooltip: Tooltip16,
  checklist: Checklist16,
  hint: Hint16,
};

export const fallbackBlockIcon = Tooltip16;
export const defaultBlockIconKey = Object.keys(builtInBlockIcons)[0];

type Props = {
  blockType: string;
  blockIcon?: string | null;
  className?: string;
  onClick?: () => void;
};

export const BlockIcon = forwardRef<HTMLDivElement, Props>(function BlockIcon(
  { blockType, blockIcon, className, ...props },
  ref,
) {
  const icon = useMemo(() => {
    const customIcon = blockIcon ? customIconOptions[blockIcon] : undefined;
    const bultinIcon = builtInBlockIcons[blockType] as IconCmp | undefined;
    return customIcon ?? bultinIcon ?? fallbackBlockIcon;
  }, [blockIcon, blockType]);

  const type = useMemo(() => {
    if (["filter"].includes(blockType)) return "logic";
    return blockType as (typeof boxStyles.variantMap.type)[number];
  }, [blockType]);

  return (
    <Box
      ref={ref}
      padding="2px" //TODO: fix theme
      borderRadius="radius4"
      className={cx(boxStyles({ type }), className)}
      {...props}
    >
      <Icon color="inherit" icon={icon} />
    </Box>
  );
});

const boxStyles = cva({
  base: {},
  variants: {
    type: {
      start: {
        backgroundColor: "blockIcon.start.bg",
        color: "blockIcon.start.fg",
      },
      component: {
        backgroundColor: "blockIcon.component.bg",
        color: "blockIcon.component.fg",
      },
      "tour-component": {
        backgroundColor: "blockIcon.component.bg",
        color: "blockIcon.component.fg",
      },
      logic: {
        backgroundColor: "blockIcon.logic.bg",
        color: "blockIcon.logic.fg",
      },
      end: {
        backgroundColor: "blockIcon.end.bg",
        color: "blockIcon.end.fg",
      },
      tour: {
        backgroundColor: "blockIcon.component.bg",
        color: "blockIcon.component.fg",
      },
    },
  },
});
