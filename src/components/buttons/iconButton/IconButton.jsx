import { BaseButton } from '@/components/common/buttons/button/Button.styles'
import styled from '@emotion/styled'

export const IconButton = props => {
  return <BaseIconButton {...props}>{props.children}</BaseIconButton>
}

/** icon 버튼 공통 스타일 (icon 버튼은 padding x)*/
export const BaseIconButton = styled(BaseButton)`
  height: fit-content;
  padding: 0px;
`
