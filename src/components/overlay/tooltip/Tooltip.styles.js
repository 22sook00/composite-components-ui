import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { Background as PopupBackground } from '@/components/overlay/popup/_styles'
import { FlexColumn } from '@/styles/components/global/Flex.styles'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const Tooltip = styled.div`
  position: relative;
  width: fit-content;
`

export const Background = styled(PopupBackground)`
  background-color: transparent;
`

export const Container = styled(FlexColumn)`
  width: max-content;
  min-height: 44px;
  min-width: 100px;
  max-width: ${({ type }) => (type === 'info' ? '500px' : 'unset')};
  gap: 8px;
  align-items: flex-start;
  padding: 12px;
  background: #fff;
  z-index: 6;
  border-radius: 6px;
  border: 1px solid #eeeeee;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};

  cursor: default;
  animation: ${({ visible }) =>
    visible
      ? css`
          ${fadeIn} 0.1s ease-in-out
        `
      : css`
          ${fadeOut} 0.1s ease-in-out
        `};
`
export const ButtonContainer = styled.div`
  width: ${({ w }) => (w ? w : 'fit-content')};
  height: ${({ h }) => (h ? h : 'fit-content')};

  display: flex;
  align-items: center;
  justify-content: center;
`
export const CloseContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`
export const Title = styled.div`
  height: ${({ h }) => (h ? h : 'auto')};
  width: fit-content;
  padding-right: 24px;
`
export const Content = styled.div`
  max-width: ${({ maw }) => (maw ? maw : '100%')};
  max-height: ${({ mah }) => (mah ? mah : 'auto')};
  padding-right: ${({ pr }) => pr || '0'};
  white-space: pre-line;
  line-height: 20px;
  text-align: left;
  overflow-y: auto;

  p {
    line-height: 20px;
  }
`
