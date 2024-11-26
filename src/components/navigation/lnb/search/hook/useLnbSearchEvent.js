import { useEffect, useRef, useState } from 'react'

const useLnbSearchEvent = searchResult => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const keyDownRef = useRef(0)

  const handleKeyDown = e => {
    const now = Date.now()
    if (now - keyDownRef.current < 50) return
    keyDownRef.current = now

    if (e.key === 'ArrowDown') {
      setSelectedIndex(prevIndex => (prevIndex === searchResult.length ? 1 : prevIndex + 1))
      return
    }

    if (e.key === 'ArrowUp') {
      setSelectedIndex(prevIndex => (prevIndex === 1 ? searchResult.length : prevIndex - 1))
      return
    }

    if (e.key === 'Enter') {
      const ele = document.querySelector(`[data-selected="true"]`)
      if (!ele) return
      ele.firstChild.click()
    }
  }

  const scrollToSelected = () => {
    const ele = document.querySelector(`[data-selected="true"]`)

    if (!ele) return
    ele.scrollIntoView({ behavior: 'auto', block: 'center' })
  }

  const handleMouseEnter = index => setSelectedIndex(index)

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keydown', scrollToSelected)

    setSelectedIndex(0)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.addEventListener('keydown', scrollToSelected)
    }
  }, [searchResult])

  return { selectedIndex, handleMouseEnter }
}

export default useLnbSearchEvent
