# Size util

고정된 사이즈를 사용 할 수 있는 util 함수를 모아둔 파일
- getIconSize : 모든 icon 파일에서 사용 가능

## History

- 2024.10.08 size-util 파일 생성
  - getIconSize 함수 추가

## Example

```js
import { getIconSize } from '@/js/util/size-util/sizeUtil'

export const HelpTipIcon = ({ size = 'md', w, h, c = '#AAAAAA', ...props }) => {
  const { width, height } = getIconSize(size, w, h)

  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="10" cy="10" r="7" stroke={c} strokeWidth="1.5" />
      <path
        d="M9.26835 11.7102C9.28022 10.1698 9.70747 9.69677 10.4552 9.22372C10.9655 8.89623 11.3453 8.48383 11.3453 7.87736C11.3453 7.19811 10.8349 6.76146 10.1822 6.76146C9.58879 6.76146 9.01912 7.1496 8.98352 7.96226H7.5C7.5356 6.33693 8.73429 5.5 10.1941 5.5C11.7963 5.5 12.9 6.4097 12.9 7.8531C12.9 8.83558 12.4134 9.47844 11.642 9.95148C10.9536 10.376 10.6688 10.8005 10.6569 11.7102V11.8194H9.26835V11.7102ZM10.0042 14.5C9.49385 14.5 9.07846 14.0755 9.07846 13.5539C9.07846 13.0445 9.49385 12.6199 10.0042 12.6199C10.4908 12.6199 10.918 13.0445 10.918 13.5539C10.918 14.0755 10.4908 14.5 10.0042 14.5Z"
        fill={c}
      />
    </svg>
  )
}
```