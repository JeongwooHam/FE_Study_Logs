import theme from "../src/style/theme";
import { ThemeProvider } from "styled-components";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: {
      argTypesRegex: "^on[A-Z].*",
      backgrounds: {
        values: [
          { name: "pink", value: "#FFD0D0" },
          { name: "skyblue", value: "#78C1F3" },
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
