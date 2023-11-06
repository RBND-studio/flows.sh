import { Box } from "@flows/styled-system/jsx";
import * as icons from "icons";

import { Text } from "../text";
import { Icon } from "./icon";

export default {
  title: "Icons",
};

export function Default(): JSX.Element {
  return (
    <Box display="flex" flexWrap="wrap" gap={16}>
      {Object.entries(icons).map(([key, icon]) => (
        <Box alignItems="center" display="flex" flexDirection="column" gap={4} key={key}>
          <Icon color="icon.strong" icon={icon} />
          <Text variant="bodyXs">{key}</Text>
        </Box>
      ))}
    </Box>
  );
}
