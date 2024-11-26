// @ts-check
import { useMemo } from 'react'

/**
 * @type {import('../_types').UseInputMode}
 */
const useInputMode = type => {
  return useMemo(() => {
    switch (type) {
      case 'tel':
        return 'tel'
      case 'number':
        return 'decimal'
      case 'email':
        return 'email'
      case 'url':
        return 'url'
      default:
        return 'text'
    }
  }, [type])
}

export default useInputMode
