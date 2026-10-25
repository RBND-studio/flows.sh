import { css, cx } from "@flows/styled-system/css";
import type { SystemStyleObject } from "@flows/styled-system/types";
import { Tab, type TabProps, Tabs, type TabsProps } from "fumadocs-ui/components/tabs";
import { type JSX } from "react";

export const DocsTab = (props: TabProps): JSX.Element => {
  return <Tab {...props} />;
};

type DocsTabsProps = TabsProps & {
  /** Style overrides, merged with the component's own styles so they win without `!` */
  css?: SystemStyleObject;
};

export const DocsTabs = ({ css: cssProp, className, ...props }: DocsTabsProps): JSX.Element => {
  return (
    <Tabs
      className={cx(
        css(
          {
            "& > div:first-child": {
              borderBottomColor: "border.neutral",
              borderBottomWidth: "1px!",
            },
          },
          cssProp,
        ),
        className,
      )}
      {...props}
    />
  );
};
