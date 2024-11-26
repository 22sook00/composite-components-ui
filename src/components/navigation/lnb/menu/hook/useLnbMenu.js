import { usePopup } from '@/components/overlay/popup'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const HIDDEN_PATH_LIST = [
  '/contents/board',
  '/setting/payment/easyPayment',
  '/link/kakaoShopping',
  '/link/zigzagShopping',
  '/link/youtubeShopping',
  '/link/facebookShopping',
  '/member/grade',
]

const useLnbMenu = (menu, activeMenu, setActiveMenu) => {
  const [listOpen, setListOpen] = useState(false)

  const router = useRouter()
  const { openConfirmPopup } = usePopup()

  const handleClickMenu = (event, path) => {
    const isHiddenPath = HIDDEN_PATH_LIST.includes(path)
    if (isHiddenPath) {
      event.preventDefault()
      openConfirmPopup({
        content: `해당 기능은 출시 예정인 기능입니다.\n이용에 불편을 드려 죄송합니다.`,
      })
    }
  }
  useEffect(() => {
    listOpen && setActiveMenu(menu?.id)
  }, [listOpen])

  useEffect(() => {
    activeMenu !== menu?.id && setListOpen(false)
  }, [activeMenu])

  useEffect(() => {
    if (menu?.path.includes(router.pathname)) setListOpen(true)
  }, [router])

  return {
    listOpen,
    setListOpen,
    router,
    // popupOpen,
    // closePopup,
    handleClickMenu,
  }
}

export default useLnbMenu
