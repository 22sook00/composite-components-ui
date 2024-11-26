import { useEffect } from 'react'

const useClickOutside = (refs, handler, isOpen = false) => {
  useEffect(() => {
    const handleClickOutside = event => {
      if (isOpen) {
        const isOutside = refs.every(ref => ref.current && !ref.current.contains(event.target))
        if (isOutside) {
          handler()
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [refs, handler, isOpen])
}

export default useClickOutside
