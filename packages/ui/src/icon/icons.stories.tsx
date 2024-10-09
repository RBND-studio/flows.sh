import { Box } from "@flows/styled-system/jsx";
import * as icons from "icons";

import { Text } from "../text";
import { Icon } from "./icon";

export default {
  title: "Tokens/Icons",
};

export function Default(): JSX.Element {
  const icons16 = Object.fromEntries(Object.entries(icons).filter(([key]) => key.endsWith("16")));

  const icons24 = Object.fromEntries(Object.entries(icons).filter(([key]) => key.endsWith("24")));

  const icons40 = Object.fromEntries(Object.entries(icons).filter(([key]) => key.endsWith("40")));

  const leftovers = Object.fromEntries(
    Object.entries(icons).filter(
      ([key]) => !key.endsWith("16") && !key.endsWith("24") && !key.endsWith("40"),
    ),
  );

  const iconSets = [
    { iconGroup: icons16, size: 16 },
    { iconGroup: icons24, size: 24 },
    { iconGroup: icons40, size: 40 },
    { iconGroup: leftovers, size: "leftovers" },
  ];

  return (
    <Box display="flex" flexDir="column" gap={16}>
      {iconSets.map(({ iconGroup, size }) => (
        <>
          <Text key={size} variant="titleL">
            {size}
          </Text>
          <Box key={size} display="flex" flexWrap="wrap" gap={8}>
            {Object.entries(iconGroup).map(([key, IconComponent]) => (
              <Box
                key={key}
                display="flex"
                alignItems="center"
                width={100}
                flexDirection="column"
                gap="space16"
                padding="space16"
              >
                <Icon color="icon" icon={IconComponent} />
                <Text variant="bodyXs">{key}</Text>
              </Box>
            ))}
          </Box>
        </>
      ))}
    </Box>
  );
}
