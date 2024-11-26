import { atom } from 'recoil'

//로컬스토리지를 이용하여 새로고침해도 유지할 수 있도록 하기.
const getLocalStorageState = (key, defaultValue) => {
  if (typeof window !== 'undefined') {
    const savedValue = localStorage.getItem(key)
    if (savedValue !== null) {
      return JSON.parse(savedValue)
    }
  }
  return defaultValue
}

export const lnbFoldingState = atom({
  key: 'lnbFoldingState',
  default: getLocalStorageState('lnbFoldingState', false),
  effects: [
    ({ onSet }) => {
      if (typeof window !== 'undefined') {
        onSet(newValue => {
          localStorage.setItem('lnbFoldingState', JSON.stringify(newValue))
        })
      }
    },
  ],
})
