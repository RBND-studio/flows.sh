import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { Check16, ChevronDown16 } from "icons";
import { Button, Icon, Text } from "ui";

const chevronRotated = css({ transform: "rotate(180deg)", flexShrink: 0 });
const chevronNormal = css({ flexShrink: 0 });

const Indicator = ({ completed }: { completed: boolean }) => {
  if (completed) {
    return (
      <Flex
        w="16px"
        h="16px"
        borderRadius="radius100"
        bg="button.black.bg.rest"
        color="button.black.fg.rest"
        alignItems="center"
        justifyContent="center"
        flexShrink={0}
      >
        <Check16 width={10} height={10} />
      </Flex>
    );
  }
  return (
    <Box
      w="16px"
      h="16px"
      borderRadius="radius100"
      borderWidth={1}
      borderColor="button.black.border.rest"
      flexShrink={0}
    />
  );
};

type ChecklistItemProps = {
  title: string;
  description?: string;
  completed: boolean;
  expanded?: boolean;
  actionLabel?: string;
};

const ChecklistItem = ({
  title,
  description,
  completed,
  expanded,
  actionLabel,
}: ChecklistItemProps) => {
  return (
    <Box
      borderWidth={1}
      borderColor={expanded ? "border.neutral" : "transparent"}
      borderRadius="radius8"
      overflow="hidden"
      bg={expanded ? "bg.neutral.muted" : "transparent"}
    >
      <Flex gap="space8" p="space12" alignItems="center" cursor="pointer">
        <Indicator completed={completed} />
        <Text variant="titleS" flex={1}>
          {title}
        </Text>
        <Icon
          icon={ChevronDown16}
          color="fg.neutral.muted"
          className={expanded ? chevronRotated : chevronNormal}
        />
      </Flex>
      {expanded && description ? (
        <Flex flexDirection="column" gap="space8" px="space12" pb="space12">
          <Text variant="bodyS" color="fg.neutral.muted">
            {description}
          </Text>
          {actionLabel ? (
            <Flex gap="space8">
              <Button variant="black" size="small" asChild>
                <div
                  className={css({
                    pointerEvents: "none",
                  })}
                >
                  {actionLabel}
                </div>
              </Button>
            </Flex>
          ) : null}
        </Flex>
      ) : null}
    </Box>
  );
};

export const FloatingChecklistDemo = () => {
  const completedCount = 2;
  const totalCount = 3;
  const progressPercent = (completedCount / totalCount) * 100;

  return (
    <Box
      bg="pane.bg.elevated"
      borderWidth={1}
      borderColor="border.neutral"
      borderRadius="radius12"
      shadow="antimetal"
      w="100%"
      height="fit-content"
    >
      {/* Header */}
      <Box px="space16" pt="space16">
        <Text variant="titleM" mr="space24" mb="space2">
          Getting started
        </Text>
      </Box>

      {/* Progress */}
      <Flex alignItems="center" gap="space8" px="space16" py="space8">
        <Box flex={1} h="8px" bg="bg.neutral.strong" borderRadius="radius8" overflow="hidden">
          <Box
            h="100%"
            bg="button.black.bg.rest"
            borderRadius="radius8"
            style={{ width: `${progressPercent}%` }}
          />
        </Box>
        <Text variant="bodyXs" color="fg.neutral.muted" flexShrink={0}>
          {completedCount} / {totalCount}
        </Text>
      </Flex>

      {/* Items */}
      <Flex flexDirection="column" gap="space2" px="space8" pb="space8">
        <ChecklistItem title="Connect your first source" completed />
        <ChecklistItem title="Create your first workflow" completed />
        <ChecklistItem
          title="Invite a team member"
          completed={false}
          expanded
          description="Add your colleagues to collaborate on workflows together."
          actionLabel="Invite"
        />
      </Flex>
    </Box>
  );
};
