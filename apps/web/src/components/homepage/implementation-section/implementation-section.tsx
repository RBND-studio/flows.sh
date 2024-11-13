import { Box } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { Text } from "ui";

import { ImplementationCodeExample } from "./implementation-code-example";
import { ImplementationExample } from "./implementation-example";
import { ImplementationFeatures } from "./implementation-features";
import { ImplementationSubfeatures } from "./implementation-subfeatures";

export const ImplementationSection = (): JSX.Element => {
  return (
    <>
      <Section pt="space80" pb="space40" md={{ pt: "space120" }}>
        <Text mb="space24" variant="title3xl">
          Deploy Flows in minutes
        </Text>
        <Text maxWidth="480px" color="muted" variant="bodyL">
          Install the SDK, add UI components, and create your first workflow. With built-in UI
          components, you can start building right away—no complex setups required.
        </Text>
      </Section>

      <Section linesWrapper>
        <Box
          borderRightColor="newBorder.neutral"
          borderRightWidth="1px"
          borderLeftColor="newBorder.neutral"
          borderLeftWidth="1px"
          layerStyle="dotBackground"
          width="100%"
          height="200px"
        />
      </Section>

      <ImplementationFeatures />
      <ImplementationExample codeExample={<ImplementationCodeExample />} />
      <ImplementationSubfeatures />
    </>
  );
};
