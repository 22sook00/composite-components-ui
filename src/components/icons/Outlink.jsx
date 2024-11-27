export const OutlinkIcon = ({ width = 20, height = 20, color = 'white', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8.14286 4H4V16H16V11.8571" stroke={color} strokeWidth="1.5" />
      <path d="M11 4H16V9" stroke={color} strokeWidth="1.5" />
      <line x1="15.4302" y1="4.53033" x2="9.77338" y2="10.1872" stroke={color} strokeWidth="1.5" />
    </svg>
  )
}
