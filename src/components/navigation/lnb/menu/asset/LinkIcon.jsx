export const LinkIcon = ({ width = 18, height = 18, strokeWidth = 2, ...props }) => {
  //* 쇼핑연동 아이콘
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8 12H16M15 8H17C19.2091 8 21 9.79086 21 12C21 14.2091 19.2091 16 17 16H15M9 8H7C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16H9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}