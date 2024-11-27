import React from "react";

export const CloseSquareIcon = ({
  width = 32,
  height = 32,
  color = "#232323",
  ...props
}) => {
  //* 기존 popupBannerClose.svg 아이콘
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_335_450)">
        <line
          x1="3.75741"
          y1="12.2426"
          x2="12.2427"
          y2="3.75736"
          stroke={color}
        />
        <line
          x1="12.2426"
          y1="12.2426"
          x2="3.75736"
          y2="3.75736"
          stroke={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_335_450">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
