/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../../components/**/*.mdx",
    "../../components/**/*.stories.js",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
    defaultName: 'Documentation',
  },
};
export default config;
