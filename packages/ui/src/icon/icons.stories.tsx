import { Box } from "@flows/styled-system/jsx";
import * as allIcons from "icons";
import type { FC, JSX, SVGProps } from "react";

import { Text } from "../text";
import { Icon } from "./icon";

export default {
  title: "Tokens/Icons",
};

const categoryNames = ["16"];
const categories = new Map<string, { key: string; IconComponent: FC<SVGProps<SVGSVGElement>> }[]>(
  categoryNames.map((size) => [size, []]),
);
categories.set("leftovers", []);

Object.entries(allIcons).forEach(([key, IconComponent]) => {
  const category = categoryNames.find((cat) => key.endsWith(cat.toString()));
  if (category) categories.get(category)?.push({ IconComponent, key });
  else categories.get("leftovers")?.push({ IconComponent, key });
});

export function Default(): JSX.Element {
  return (
    <Box display="flex" flexDir="column" gap={16}>
      {Array.from(categories.entries()).map(([size, icons]) => (
        <>
          <Text key={size} variant="titleL">
            {size}
          </Text>
          <Box key={size} display="flex" flexWrap="wrap" gap={8}>
            {icons.map(({ IconComponent, key }) => (
              <Box
                key={key}
                display="flex"
                alignItems="center"
                width={100}
                flexDirection="column"
                gap="space16"
                padding="space16"
              >
                <Icon color="newFg.neutral.muted" icon={IconComponent} />
                <Text variant="bodyXs">{key}</Text>
              </Box>
            ))}
          </Box>
        </>
      ))}
    </Box>
  );
}
