import { useCallback, useState } from 'react'

/**
 * @param {boolean} [initialState=false] - 초기 상태
 * @param {{onOpen: Function, onClose: Function}} [callbacks] - 상태가 변경될 때 호출되는 콜백
 *
 * @returns {[boolean, {open: Function, close: Function, toggle: Function}]} 현재 상태가 포함된 배열과 `open`, `close` 및 `toggle` 메서드가 포함된 객체
 */
const useDisclosure = (initialState = false, callbacks) => {
  const { onOpen, onClose } = callbacks || {}
  const [opened, setOpened] = useState(initialState)

  const open = useCallback(
    (...props) => {
      setOpened(isOpened => {
        if (!isOpened) {
          onOpen?.(...props)
          return true
        }
        return isOpened
      })
    },
    [onOpen]
  )

  const close = useCallback(
    (...props) => {
      setOpened(isOpened => {
        if (isOpened) {
          onClose?.(...props)
          return false
        }
        return isOpened
      })
    },
    [onClose]
  )

  const toggle = useCallback(
    (...props) => {
      opened ? close(...props) : open(...props)
    },
    [close, open, opened]
  )
  return [opened, { open, close, toggle }]
}

export default useDisclosure
