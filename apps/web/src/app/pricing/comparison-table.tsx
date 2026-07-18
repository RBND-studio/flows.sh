import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { Section } from "components/ui/section";
import { Check16, Minus16 } from "icons";
import { Fragment, type ReactNode } from "react";
import { FREE_LIMIT, newPricingTiers, PRO_FLAT_FEE, PRO_INCLUDED_MTU } from "shared";
import { Icon, Text, Tooltip } from "ui";

const tier2UnitPrice = Number(newPricingTiers[1].unit_amount_decimal) / 100;
const tier2MtuAmount = newPricingTiers[1].up_to - PRO_INCLUDED_MTU;
const tier3UnitPrice = Number(newPricingTiers[2].unit_amount_decimal) / 100;
const tier3MtuAmount = newPricingTiers[2].up_to - newPricingTiers[1].up_to;

type PlansProps = {
  categoryTitle?: string;
  items: {
    title: string;
    description?: string | ReactNode;
    free: boolean | string;
    pro: boolean | string;
  }[];
};

const plans: PlansProps[] = [
  {
    items: [
      {
        title: "Flat fee",
        free: "Free",
        pro: `$${PRO_FLAT_FEE} / month`,
      },
      {
        title: "Included MTUs",
        free: `${FREE_LIMIT} MTUs`,
        pro: `${PRO_INCLUDED_MTU} MTUs`,
      },
      {
        title: "Additional MTUs",
        free: false,
        pro: `Starts at $${tier2UnitPrice} per MTU`,
        description: (
          <>
            When you exceed the included MTUs on a paid plan, you will be charged for additional
            MTUs at the end of the billing period. The price per MTU is volume based, so the more
            MTUs you have, the lower the price per unit will be.
            <br />
            <br />
            For example, if you use 5,000 MTUs in a month, the first {PRO_INCLUDED_MTU} MTUs are
            included in your plan, then you would pay ${tier2UnitPrice} per MTU for the next{" "}
            {tier2MtuAmount} MTUs, ${tier3UnitPrice} per MTU for the next {tier3MtuAmount} MTUs, and
            so on. See below for the full unit pricing breakdown.
          </>
        ),
      },
      {
        title: "Total monthly users",
        free: "10,000",
        pro: "Unlimited",
        description:
          "How many users visit your app each month, regardless of whether they see an experience or not.",
      },
    ],
  },
  {
    categoryTitle: "Features",
    items: [
      {
        title: "Tours",
        free: true,
        pro: true,
      },
      {
        title: "Workflows",
        free: true,
        pro: true,
      },
      {
        title: "Surveys",
        free: true,
        pro: true,
      },
      {
        title: "Launchpad",
        free: true,
        pro: true,
      },
      {
        title: "Analytics",
        free: true,
        pro: true,
      },
      {
        title: "Pre-built components",
        free: true,
        pro: true,
      },
      {
        title: "Custom components",
        free: "Localhost only",
        pro: true,
        description:
          "Custom components allow you to build your own components and use them in your experiences. This is useful for building complex experiences that require custom logic or UI. On the Free plan, custom components will render only on localhost, but on the Pro plan, they will render in production as well.",
      },
    ],
  },
  {
    categoryTitle: "Other",
    items: [
      {
        title: "Remove Flows branding",
        free: false,
        pro: true,
        description: 'Remove "Powered by Flows" from all components.',
      },
      {
        title: "Team members",
        free: "Unlimited",
        pro: "Unlimited",
      },
      {
        title: "Community support",
        free: true,
        pro: true,
        description: "Join our community on Slack.",
      },
      {
        title: "Priority support",
        free: false,
        pro: true,
        description: "Get responses to your support requests within 24 hours.",
      },
      {
        title: "Private Slack channel",
        free: false,
        pro: true,
        description:
          "Get a private Slack channel for your team to communicate with the Flows team.",
      },
    ],
  },
];

export const ComparisonTable = () => {
  return (
    <Section sideBorders decorator="split" bottomBorder>
      <Box w="100%">
        <table
          className={css({
            w: "100%",
          })}
        >
          <thead
            className={css({
              borderBottomWidth: 1,
              borderBottomColor: "border.neutral.placeholder",
              bg: "bg.neutral.muted",
              w: "100%",
            })}
          >
            <tr>
              <th
                className={css({
                  w: "50%",
                  p: "space16",
                  verticalAlign: "bottom",
                })}
              >
                <Text variant="titleS" color="fg.neutral.muted" flex={1}>
                  Compare plans
                </Text>
              </th>
              <th
                className={css({
                  w: "25%",
                  p: "space16",
                })}
              >
                <Text variant="titleS" color="fg.neutral.muted" flex={1} textAlign="center">
                  Hobby
                </Text>
              </th>
              <th
                className={css({
                  w: "25%",
                  p: "space16",
                })}
              >
                <Text variant="titleS" color="fg.neutral.muted" flex={1} textAlign="center">
                  Pro
                </Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plans, index) => {
              return (
                <Fragment key={index}>
                  {plans.categoryTitle && (
                    <tr
                      className={css({
                        w: "100%",
                        borderBottomWidth: 1,
                        borderBottomColor: "border.neutral.placeholder",
                      })}
                    >
                      <td
                        colSpan={3}
                        className={css({
                          w: "100%",
                          p: "space16",
                          bg: "bg.neutral.muted",
                        })}
                      >
                        <Text variant="titleS" color="fg.neutral.muted" flex={1}>
                          {plans.categoryTitle}
                        </Text>
                      </td>
                    </tr>
                  )}
                  {plans.items.map((item) => {
                    {
                      const tableValue = (value: boolean | string): ReactNode => {
                        if (value === true) {
                          return (
                            <Box
                              bg="fg.neutral"
                              p="space2"
                              borderRadius="50%"
                              w="fit-content"
                              mx="auto"
                              aria-label="Yes"
                            >
                              <Icon color="fg.neutral.onBlack" icon={Check16} />
                            </Box>
                          );
                        }
                        if (value === false) {
                          return (
                            <Box p="space2" w="fit-content" mx="auto" aria-label="No">
                              <Icon color="fg.neutral.subtle" icon={Minus16} />
                            </Box>
                          );
                        }
                        return (
                          <Text
                            variant="bodyS"
                            align="center"
                            textWrap="balance"
                            color="fg.neutral"
                          >
                            {value}
                          </Text>
                        );
                      };

                      return (
                        <tr
                          key={item.title}
                          className={css({
                            w: "100%",
                            borderBottomWidth: 1,
                            borderBottomColor: "border.neutral.placeholder",
                            _last: {
                              borderBottomWidth: 0,
                            },
                          })}
                        >
                          <td className={css({ w: "50%", p: "space16" })}>
                            {item.description ? (
                              <Tooltip
                                trigger={
                                  <Text
                                    as="h3"
                                    variant="titleM"
                                    width="fit-content"
                                    textDecoration="underline"
                                    textDecorationColor="border.neutral.strong"
                                    textDecorationStyle="dotted"
                                    textUnderlineOffset={4}
                                  >
                                    {item.title}
                                  </Text>
                                }
                                content={item.description}
                                supportMobileTap
                              />
                            ) : (
                              <Text as="h3" variant="titleM">
                                {item.title}
                              </Text>
                            )}
                          </td>

                          <td className={css({ w: "25%", p: "space16" })}>
                            {tableValue(item.free)}
                          </td>
                          <td className={css({ w: "25%", p: "space16" })}>
                            {tableValue(item.pro)}
                          </td>
                        </tr>
                      );
                    }
                  })}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </Box>
    </Section>
  );
};
