import { STORE_OPERATE, STORE_PARTNER, STORE_SETTING } from '../../menu/constant/tabMenu'
import { useCallback, useEffect, useRef, useState } from 'react'

const useSearchMenu = () => {
  const keywordRef = useRef(null)
  const [menus, setMenus] = useState([])

  const sortMenuItems = (menus, tabTitle) => {
    return menus.map(menu => ({
      id: menu.id,
      title: menu.title,
      tabTitle,
      path: menu.path[0],
      sub: menu.sub,
      isParents: true,
    }))
  }

  const flattenedMenu = menus => {
    return menus.flatMap(menu => {
      return [
        {
          id: menu.id,
          title: menu.title,
          tabTitle: menu.tabTitle,
          path: menu.path,
          isView: menu.isView || 'all',
          isParents: menu.isParents,
        },
        ...menu.sub.map(sub => ({
          id: sub.id,
          title: sub.title,
          path: sub.path,
          isView: sub.isView,
          isLabel: sub.isLabel,
          isParents: false,
        })),
      ]
    })
  }

  const searchMenu = keyword => {
    const lowerKeyword = keyword.trim().toLowerCase()
    keywordRef.current = lowerKeyword

    if (lowerKeyword === '') return []

    let result = []

    for (const menu of menus) {
      // 첫번째 뎁스 키워드 검색
      if (menu.title.toLowerCase().includes(lowerKeyword) && menu.sub.length === 0) {
        result.push(menu)
        continue
      }

      if (menu.sub.length > 0) {
        // 두번째 뎁스 키워드 검색
        const filteredSub = menu.sub.filter(sub => sub.title.toLowerCase().includes(lowerKeyword))

        if (filteredSub.length > 0) {
          result.push({ ...menu, sub: filteredSub })
        }
      }
    }
    return flattenedMenu(result)
  }

  const highlightKeyword = text => {
    return text
      .split(new RegExp(`(${keywordRef.current})`, 'gi'))
      .map(el => ({ text: el, isKeyword: keywordRef.current === el.toLowerCase() }))
  }

  useEffect(() => {
    setMenus([
      ...sortMenuItems(STORE_OPERATE, '운영관리'),
      ...sortMenuItems(STORE_SETTING, '상점설정'),
      ...sortMenuItems(STORE_PARTNER, '성장센터'),
    ])
  }, [])

  return { searchMenu: useCallback(searchMenu, [menus]), highlightKeyword }
}

export default useSearchMenu
