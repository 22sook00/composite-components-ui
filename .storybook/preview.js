import { withTheme } from "./withTheme.decorator";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // 글로벌 테마 설정
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light", // 기본 테마 설정
      toolbar: {
        icon: "circlehollow", // Storybook UI에서 테마 선택을 위한 아이콘
        items: ["light", "dark"], // 선택 가능한 테마
        showName: true,
      },
    },
  },
  // 데코레이터 추가
  decorators: [withTheme],
};

export default preview;
