// @ts-check
import { useRecoilState } from 'recoil'
import { PopupAtom } from './atom'
import { DEFAULT_POPUP_PROPS } from './constant'
import { useEffect } from 'react'

/** @type {import('./type').UsePopupHook} */
const usePopup = () => {
  const [popups, setPopups] = useRecoilState(PopupAtom)

  const randomId = () => `popup-${Math.random().toString(36).slice(2, 11)}`

  /** @type {import('./type').ClosePopup} */
  const closePopup = id => {
    if (id) {
      setPopups(popups => popups.filter(popup => popup.id !== id))
    } else {
      setPopups(popups => popups.slice(0, -1))
    }
  }

  const closeAllPopup = () => {
    setPopups([])
  }

  /**
   * 버튼 하나만 있는 기본 팝업 열기
   * @type {import('./type').OpenConfirmPopup}
   */
  const openConfirmPopup = props => {
    const { id, title, content, children, confirmText, onConfirm } = props
    const popupId = id || randomId()

    setPopups(popups => [
      ...popups,
      {
        ...DEFAULT_POPUP_PROPS,
        id: popupId,
        title,
        content,
        children,
        confirmText,
        onConfirm: onConfirm ?? (() => closePopup(popupId)),
      },
    ])
  }

  /**
   * 버튼 두개 있는 (확인, 취소) 팝업 열기
   * @type {import('./type').OpenCancelConfirmPopup}
   */
  const openCancelConfirmPopup = props => {
    const { id, onConfirm, onCancel } = props
    const popupId = id || randomId()

    setPopups(popups => [
      ...popups,
      {
        ...DEFAULT_POPUP_PROPS,
        ...props,
        id: popupId,
        onCancel: onCancel ?? (() => closePopup(popupId)),
        onConfirm: onConfirm ?? (() => closePopup(popupId)),
      },
    ])
  }

  useEffect(() => {
    // unmount 될 때 popup 닫아주기
    return () => {
      closeAllPopup()
    }
  }, [])

  return { popups, openConfirmPopup, openCancelConfirmPopup, closePopup, closeAllPopup }
}

export default usePopup
