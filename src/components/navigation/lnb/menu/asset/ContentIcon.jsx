export const ContentIcon = ({ width = 18, height = 18, ...props }) => {
  //* 콘텐츠 아이콘
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_1018_12034)">
        <path
          d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM19 19H5V7H19V19ZM16 12H8C7.45 12 7 11.55 7 11C7 10.45 7.45 10 8 10H16C16.55 10 17 10.45 17 11C17 11.55 16.55 12 16 12ZM12 16H8C7.45 16 7 15.55 7 15C7 14.45 7.45 14 8 14H12C12.55 14 13 14.45 13 15C13 15.55 12.55 16 12 16Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1018_12034">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
