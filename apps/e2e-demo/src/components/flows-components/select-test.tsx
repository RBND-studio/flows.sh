import { Box } from "@flows/styled-system/jsx";
import { Button, Text } from "ui";

type Props = {
  testInput: string;
  complete?: () => void;
};

export const SelectTest = ({ testInput, complete }: Props): React.ReactNode => {
  return (
    <Box p="space8" layerStyle="card">
      <Text weight="700">Select:</Text>
      <Text id="test-input" mb="space8">
        {testInput}
      </Text>

      <Button size="small" onClick={complete}>
        Complete
      </Button>
    </Box>
  );
};
