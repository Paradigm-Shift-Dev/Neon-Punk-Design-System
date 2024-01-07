/** @type { import('@storybook/react').Preview } */
import DocumentationTemplate from './DocumentationTemplate.mdx';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: DocumentationTemplate,
      toc: true,
    },
  },
};

export default preview;
