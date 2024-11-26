import { RecoilState } from 'recoil'

export interface ConfirmPopup {
  id?: string
  title?: string
  content?: string
  children?: React.ReactNode
  confirmText?: string
  onConfirm?: () => void
}

export interface CancelConfirmPopup extends ConfirmPopup {
  direction?: 'row' | 'col'
  cancelText?: string
  onCancel?: () => void
}

export type Popups = (ConfirmPopup | CancelConfirmPopup)[]
export type OpenConfirmPopup = (props: ConfirmPopup) => void
export type OpenCancelConfirmPopup = (props: CancelConfirmPopup) => void
export type ClosePopup = (id?: string) => void

// usePopup 훅 반환 타입 정의
export type UsePopupHook = () => {
  popups: Popups
  openConfirmPopup: OpenConfirmPopup
  openCancelConfirmPopup: OpenCancelConfirmPopup
  closePopup: ClosePopup
  closeAllPopup: () => void
}
