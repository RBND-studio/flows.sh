import "./index.css";
import { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    darkMode: {
      stylePreview: true,
      darkClass: "dark-mode",
      lightClass: "light-mode",
      classTarget: "html",
    },
  },
};

export default preview;
