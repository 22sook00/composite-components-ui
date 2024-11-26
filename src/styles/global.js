import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    font-family: var(--font-pretendard);
    margin: 0;
    padding: 0;
    color: inherit;
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* 글로벌 커스텀 스크롤바 스타일 */
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    /* 글로벌 스크롤바 thumb(드래그 가능한 부분) 스타일 */
    ::-webkit-scrollbar-thumb {
      min-height: 50px;
      background-color: #eee;
      border-radius: 10px;
    }

    /* 글로벌 스크롤바 track(드래그 불가능한 부분) 스타일 */
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }

  .none-scroll-bar {
    /* 글로벌 커스텀 스크롤바 스타일 */
    ::-webkit-scrollbar {
      display: none !important;
    }
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
    flex-shrink: 0;
  }
  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-break: break-word;
    tab-size: 4;
  }
  html,
  body {
    height: 100%;
    overflow: overlay;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  button {
    background: none;
    border: 0;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important; // input 자동완성 배경 색상 흰색으로 적용
  }

  .MuiTypography-root,
  .MuiTableCell-root,
  .MuiButtonBase-root,
  .MuiMenuItem-root,
  .apexcharts-legend-text {
    font-family: var(--font-pretendard) !important;
  }

  // react sortable tree
  .rst__node {
    height: 54px !important;
    margin-left: -28px;
  }
  .rst__rowWrapper {
    padding: 0;
  }
  .rst__tree {
    width: 100%;
  }
  .rst__lineBlock,
  .rst__lineFullVertical,
  .rst__collapseButton {
    display: none;
  }
  .rst__lineChildren {
    &::after {
      display: none;
    }
  }
  .rst__moveHandle,
  .rst__loadingHandle {
    border: none;
    box-shadow: none;
    background-color: transparent;
    width: 16px;
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='18' viewBox='0 0 16 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_254_3359)'%3E%3Cpath d='M12.6667 6.80957H3.33335C2.96669 6.80957 2.66669 7.13814 2.66669 7.53973C2.66669 7.94132 2.96669 8.26989 3.33335 8.26989H12.6667C13.0334 8.26989 13.3334 7.94132 13.3334 7.53973C13.3334 7.13814 13.0334 6.80957 12.6667 6.80957ZM3.33335 11.1905H12.6667C13.0334 11.1905 13.3334 10.862 13.3334 10.4604C13.3334 10.0588 13.0334 9.73021 12.6667 9.73021H3.33335C2.96669 9.73021 2.66669 10.0588 2.66669 10.4604C2.66669 10.862 2.96669 11.1905 3.33335 11.1905Z' fill='%23D5D5D7'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_254_3359'%3E%3Crect width='16' height='17.5238' fill='white' transform='translate(0 0.238281)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
  }
  .rst__highlightLineVertical,
  .rst__highlightBottomLeftCorner,
  .rst__highlightTopLeftCorner,
  .rst__rtl {
    display: none !important;
  }
  .rst__rowContents {
    border: none;
    box-shadow: none;
  }
  .rst__rowLabel {
    width: 100%;
  }

  .Mui-selected.Mui-focusVisible {
    background-color: #9d42fb !important;
  }

  @media print {
    html,
    body {
      height: initial !important;
      overflow: initial !important;
      -webkit-print-color-adjust: exact;
    }
  }

  .highlight {
    animation: animation-box 1s;
  }

  @keyframes animation-box {
    0% {
      /* box-shadow: #9d42fb 0px 2px 15px 0px; */
      outline: 2px solid #9d42fb;
    }
    80% {
      /* box-shadow: #9d42fb 0px 2px 15px 0px; */
      outline: 2px solid #b670ff;
    }

    95% {
      outline: 2px solid #eddbff;
    }

    100% {
      /* box-shadow: rgba(0, 0, 0, 0.03) 0px 2px 15px 0px; */
      outline: 2px solid transparent;
    }
  }
`;
