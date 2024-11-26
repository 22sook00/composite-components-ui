import styled from '@emotion/styled'
import { BaseButton, ButtonInner } from '@/components/common/buttons/button/Button.styles'

/** 텍스트 버튼 공통 스타일 (텍스트 버튼은 padding x)*/
export const BaseTextButton = styled(BaseButton)`
  height: fit-content;
  padding: 0px;

  text-decoration: ${({ td }) => td || 'underline'};
  text-decoration-color: ${({ c }) => c};
  text-underline-offset: 3px;

  &:disabled {
    text-decoration-color: #cccccc !important;
  }
`

export const TextButtonInner = styled(ButtonInner)``
