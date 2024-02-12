import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { Icon, Text } from "ui";

import { cardWrapper } from "./card-wrapper";

export type FeatureCardTypes = {
  featureIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  featureName?: string;
  mainSlot: React.ReactNode;
  illustration?: React.ReactNode;
  reverse?: boolean;
};

export const FeatureCard = (props: FeatureCardTypes): JSX.Element => {
  return (
    <Flex className={cardWrapper({ reverse: props.reverse })}>
      <Flex flexDir="column" gap="space4" padding="space24">
        {props.featureIcon && props.featureName ? (
          <Flex alignItems="center" gap="space8">
            <Icon color="text.subtle" icon={props.featureIcon} />
            <Text as="h3" color="subtle" variant="bodyS">
              {props.featureName}
            </Text>
          </Flex>
        ) : null}
        <Text
          className={css({
            "& span": {
              color: "text",
            },
          })}
          color="muted"
          variant="titleL"
        >
          {props.mainSlot}
        </Text>
      </Flex>
      {props.illustration}
    </Flex>
  );
};
