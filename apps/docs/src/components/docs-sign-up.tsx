import { Box } from "@flows/styled-system/jsx";

export const DocsSignUp = (): JSX.Element => {
  return (
    <Box
      _hover={{
        backgroundColor: "bg.primaryHover",
      }}
      backgroundColor="bg.primary"
      borderRadius="radius8"
      color="text.onPrimary"
      fastEaseInOut="background-color"
      paddingX="space12"
      paddingY="6px"
      textStyle="titleS"
    >
      Sign up
    </Box>
  );
};
