import { Flex } from "@flows/styled-system/jsx";
import { PlaceholderApplication } from "components/placeholder-application";

export default function Home(): JSX.Element {
  return (
    <Flex height="100vh" alignItems="center">
      <Flex height="560px" flex={1} justifyContent="center">
        <PlaceholderApplication />
      </Flex>
    </Flex>
  );
}
