import { Box } from "@flows/styled-system/jsx";
import { Button, Text } from "ui";

type Props = {
  testInput: number;
  complete?: () => void;
};

export const NumberTest = ({ testInput, complete }: Props): React.ReactNode => {
  const isNumber = (value): boolean => {
    return typeof value === "number";
  };

  return (
    <Box p="space8" layerStyle="card">
      <Text weight="700">Number:</Text>
      <Text id="test-input" mb="space8">
        {testInput}
      </Text>

      <Text weight="700">Is number:</Text>
      <Text id="test-validation" mb="space8">
        {isNumber(testInput) ? "Yes" : "No"}
      </Text>

      <Button size="small" onClick={complete}>
        Complete
      </Button>
    </Box>
  );
};
