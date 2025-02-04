import { css, cx } from "@flows/styled-system/css";
import { Tab, type TabProps, Tabs, type TabsProps } from "fumadocs-ui/components/tabs";
import { type JSX } from "react";

export const DocsTab = (props: TabProps): JSX.Element => {
  return <Tab {...props} />;
};

export const DocsTabs = (props: TabsProps): JSX.Element => {
  return (
    <Tabs
      className={cx(
        css({
          "& > div:first-child": {
            borderBottomColor: "newBorder.neutral",
            borderBottomWidth: "1px!",
          },
        }),
        props.className,
      )}
      {...props}
    />
  );
};
