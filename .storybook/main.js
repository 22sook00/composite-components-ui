/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require("path");
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/components": path.resolve(__dirname, "../src/components"),
      "@/styles": path.resolve(__dirname, "../src/styles"),
      "@/utils": path.resolve(__dirname, "../src/utils"),
      "@/assets": path.resolve(__dirname, "../src/assets"),
      "@/hooks": path.resolve(__dirname, "../src/hooks"),
    };
    return config;
  },
};
export default config;
