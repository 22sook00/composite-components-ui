import { css, Global, ThemeProvider, useTheme } from "@emotion/react";
import { globalStyles as globalStyle } from "../src/styles/global";
import localFont from "next/font/local";

const pretendard = localFont({
  src: [
    {
      path: "../public/asset/Pretendard-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/asset/Pretendard-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/asset/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/asset/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/asset/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/asset/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/asset/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  subsets: ["sans-serif"],
  variable: "--font-pretendard",
  display: "swap",
});
const GlobalStyles = () => {
  return <Global styles={globalStyle} />;
};

export const withTheme = (Story) => {
  return (
    <div className={pretendard.className}>
      <GlobalStyles
        styles={css`
          ${globalStyles}
          body {
            font-family: ${pretendard.style.fontFamily};
          }
        `}
      />
      <Story />
    </div>
  );
};
