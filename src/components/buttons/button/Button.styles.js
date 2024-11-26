import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'

/** 버튼 공통 애니메이션 */
const commonButton = css`
  transition: transform 0.1s ease;
  &:active {
    transform: translateY(2px);
  }
  &:disabled {
    cursor: not-allowed;
    transition: none;
    transform: none;
  }
`

const createLoaderAnimation = color => keyframes`
  0% {
    box-shadow: 8px 0 ${color}, -8px 0 ${color}20;
    background: ${color};
  }
  33% {
    box-shadow: 8px 0 ${color}, -8px 0 ${color}20;
    background: ${color}20;
  }
  66% {
    box-shadow: 8px 0 ${color}20, -8px 0 ${color};
    background: ${color}20;
  }
  100% {
    box-shadow: 8px 0 ${color}20, -8px 0 ${color};
    background: ${color};
  }
`

const buttonSize = {
  xl: css`
    height: 48px;
    padding: 13px 16px;
    border-radius: 6px;
  `,

  lg: css`
    height: 40px;
    padding: 9px 16px;
    border-radius: 6px;
  `,

  md: css`
    height: 32px;
    padding: 7px 12px;
    border-radius: 4px;
  `,

  sm: css`
    height: 24px;
    padding: 4px 8px;
    border-radius: 4px;
  `,
}

/** 공통 스타일 */
export const BaseButton = styled.button`
  ${commonButton}
  ${({ size }) => buttonSize[size || 'md']}

  position: relative;
  width: ${({ w }) => w || 'fit-content'};
  margin: ${({ m }) => m || '0px'};
  margin-top: ${({ mt, m }) => (m ? '' : mt || '0px')};
  margin-bottom: ${({ mb, m }) => (m ? '' : mb || '0px')};
  margin-left: ${({ ml, m }) => (m ? '' : ml || '0px')};
  margin-right: ${({ mr, m }) => (m ? '' : mr || '0px')};

  * {
    color: ${({ c }) => `${c} !important`};
  }

  &:disabled {
    * {
      color: #cccccc !important;
    }
  }
`

export const ButtonInner = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  width: 100%;

  transform: translateY(${({ isLoading }) => (isLoading ? '50%' : '0')});
  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
  transition: transform 0.3s ease-out, opacity 0s ease-out;
`

/** filled button */
export const FilledButton = styled(BaseButton)`
  display: flex;
  align-items: center;

  background-color: ${({ bg }) => bg};

  &:hover {
    background-color: ${({ hover }) => hover};
  }

  &:disabled {
    background-color: #f7f6f8 !important;
  }
`

/** outlined button */
export const OutlinedButton = styled(BaseButton)`
  display: flex;
  align-items: center;

  border: 1px solid #eeeeee;
  background-color: #ffffff;

  &:hover {
    border-color: ${({ hover }) => hover};
  }

  &:disabled {
    border-color: #eeeeee !important;
  }
`

export const ButtonLoader = styled.div`
  position: absolute;
  top: ${({ isLoading }) => (isLoading ? '50%' : '10%')};
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  transition: top 0.3s ease-out, opacity 0s ease-out;

  width: 4px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: ${({ c }) => createLoaderAnimation(c)} 1s infinite linear alternate;
`
