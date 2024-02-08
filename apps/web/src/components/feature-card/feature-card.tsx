import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { Icon, Text } from "ui";

type Props = {
  featureIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  featureName: string;
  mainSlot: React.ReactNode;
  illustration: React.ReactNode;
};

const wrapperStyles = css({
  bor: "1px",
  borderRadius: "radius12",
  background:
    "linear-gradient(195deg, rgba(0, 0, 0, 0) 6%, rgba(0, 0, 0, 0.06) 94%), linear-gradient(0deg, token(colors.bg.card), token(colors.bg.card))",
  overflow: "hidden",
  boxShadow: "l1",
  _dark: {
    background:
      "linear-gradient(195deg, rgba(255, 255, 255, 0.04) 6%, rgba(255, 255, 255, 0) 94%), linear-gradient(0deg, token(colors.bg.card), token(colors.bg.card))",
  },
});

export const FeatureCard = (props: Props): JSX.Element => {
  return (
    <Flex className={wrapperStyles} flexDir="column">
      <Flex flexDir="column" gap="space4" padding="space24">
        <Flex alignItems="center" gap="space8">
          <Icon color="text.subtle" icon={props.featureIcon} />
          <Text color="subtle" variant="bodyS">
            {props.featureName}
          </Text>
        </Flex>
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
