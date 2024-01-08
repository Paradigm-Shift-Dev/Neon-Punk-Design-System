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
    {
      name: '@storybook/addon-backgrounds',
      options: {
        backgrounds: [
          { name: 'Default', value: '#111919', default: true },
          { name: 'Dark', value: '#111919' },
        ],
      },
    },
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
