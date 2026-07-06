import { Box } from "@flows/styled-system/jsx";
import { ThemeImage } from "components/theme-image";
import { type JSX } from "react";
import workflowEditorDarkPng from "./workflow-editor-dark.png";
import workflowEditorLightPng from "./workflow-editor-light.png";

export const WorkflowEditorIllustration = (): JSX.Element => {
  return (
    <Box
      position="relative"
      w="100%"
      h="100%"
      overflow="hidden"
      borderTopRadius="radius8"
      borderTopWidth={1}
      borderLeftWidth={1}
      borderRightWidth={1}
      borderColor="border.neutral"
      shadow="antimetal"
    >
      <ThemeImage
        srcLight={workflowEditorLightPng}
        srcDark={workflowEditorDarkPng}
        alt="Visual workflow editor"
        height={1230}
        width={2380}
        placeholder="blur"
        style={{ objectFit: "cover", objectPosition: "top left", width: "100%" }}
      />
    </Box>
  );
};
