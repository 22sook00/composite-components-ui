import { Typography } from '../../typography/Typography'
import * as SC from './TextButton.styles'

const ButtonText = ({ size, fw = 500, children }) => {
  if (size === 'md')
    return (
      <Typography.Body1 fw={fw} style={{ width: 'fit-content' }}>
        {children}
      </Typography.Body1>
    )
  if (size === 'sm')
    return (
      <Typography.Body2 fw={fw} style={{ width: 'fit-content' }}>
        {children}
      </Typography.Body2>
    )
  return (
    <Typography.Body3 fw={fw} style={{ width: 'fit-content' }}>
      {children}
    </Typography.Body3>
  )
}

export const TextButton = props => {
  return (
    <SC.BaseTextButton c={props.c || '#555555'} {...props}>
      <SC.TextButtonInner>
        {props.leftIcon && <span>{props.leftIcon}</span>}
        <ButtonText size={props.size || 'md'} fw={props.fw}>
          {props.children}
        </ButtonText>
        {props.rightIcon && <span>{props.rightIcon}</span>}
      </SC.TextButtonInner>
    </SC.BaseTextButton>
  )
}
