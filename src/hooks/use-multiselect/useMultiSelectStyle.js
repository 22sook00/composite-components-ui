import { useMemo } from 'react'

const useMultiSelectStyle = (size, width) => {
  const selectSize = useMemo(() => {
    switch (size) {
      case 'sm':
        return { width: width || 130, maxHeight: 185, maxWidth: 100, ellipsisWidth: 56 }
      case 'lg':
        return { width: width || 440, maxHeight: 170, maxWidth: '100%', ellipsisWidth: 390 }
      default:
        return { width: width || 200, maxHeight: 185, maxWidth: 440, ellipsisWidth: 150 }
    }
  })

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: selectSize.maxHeight,
        width: selectSize.width,
      },
    },

    MenuListProps: {
      style: {
        // 스크롤바에 마진을 주기 위해 padding-right를 추가
        padding: '0 8px',
      },
    },

    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
    variant: 'menu',
  }
  return { MenuProps, selectSize }
}

export default useMultiSelectStyle
