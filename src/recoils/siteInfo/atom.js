import { atom } from 'recoil'

export const siteInfoState = atom({
  key: 'siteInfoState',
  default: {
    plan: 'free',
  },
})

export const dashboardInfoState = atom({
  key: 'dashboardInfoState',
  default: {
    mySite: {},
  },
})

export const messageAuthState = atom({
  key: 'messageAuthState',
  default: false,
})

export const messageCompleteVerifyState = atom({
  key: 'messageCompleteVerifyState',
  default: false,
})

export const channelStayState = atom({
  key: 'channelStayState',
  default: false,
})
