import { Box } from "@flows/styled-system/jsx";
import { Button, Text } from "ui";

type Props = {
  testInput: string;
  complete?: () => void;
};

export const StringTest = ({ testInput, complete }: Props): React.ReactNode => {
  const isString = (value): boolean => {
    return typeof value === "string";
  };

  return (
    <Box p="space8" layerStyle="card">
      <Text weight="700">String:</Text>
      <Text id="test-input" mb="space8">
        {testInput}
      </Text>

      <Text weight="700">Is string:</Text>
      <Text id="test-validation" mb="space8">
        {isString(testInput) ? "Yes" : "No"}
      </Text>

      <Button size="small" onClick={complete}>
        Complete
      </Button>
    </Box>
  );
};
