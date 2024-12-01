import { Box } from "@flows/styled-system/jsx";
import { Button, Text } from "ui";

type Props = {
  testInput: boolean;
  complete?: () => void;
};

export const BooleanTest = ({ testInput, complete }: Props): React.ReactNode => {
  const isBoolean = (value): boolean => {
    return typeof value === "boolean";
  };

  return (
    <Box p="space8" layerStyle="card">
      <Text weight="700">Boolean:</Text>
      <Text id="test-input" mb="space8">
        {testInput}
      </Text>

      <Text weight="700">Is boolean:</Text>
      <Text id="test-validation" mb="space8">
        {isBoolean(testInput) ? "Yes" : "No"}
      </Text>

      <Button size="small" onClick={complete}>
        Complete
      </Button>
    </Box>
  );
};
