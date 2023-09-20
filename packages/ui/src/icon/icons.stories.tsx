import * as icons from "icons";
import { Box } from "@flows/styled-system/jsx";
import { css } from "@flows/styled-system/css";

export default {
  title: "Icons",
};

export function Default(): JSX.Element {
  return (
    <Box display="flex" flexWrap="wrap" gap={16}>
      {Object.entries(icons).map(([key, Icon]) => (
        <Box alignItems="center" display="flex" flexDirection="column" gap={4} key={key}>
          <Icon color="#212121" height={24} width={24} />
          <p className={css({ fontSize: 12 })}>{key}</p>
        </Box>
      ))}
    </Box>
  );
}
