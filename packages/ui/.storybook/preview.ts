import "./index.css";
import type { Preview } from "@storybook/react-vite";

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
      darkClass: "dark",
      lightClass: "light",
      classTarget: "html",
    },
  },

  tags: ["autodocs"]
};

export default preview;
