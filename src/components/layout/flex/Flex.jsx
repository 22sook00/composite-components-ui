import { Children } from 'react'
import * as SC from './Flex.styles'

const FlexContainer = props => {
  return <SC.FlexContainer {...props}>{props.children}</SC.FlexContainer>
}

const Row = props => {
  const { align = 'center', gap = '8px', ...rest } = props

  return (
    <SC.FlexRowContainer align={align} gap={gap} {...rest}>
      {Children.map(props.children, child => (
        <div>{child}</div>
      ))}
    </SC.FlexRowContainer>
  )
}

const Column = props => {
  const { children, ...rest } = props
  return (
    <Flex direction="column" {...rest}>
      {children}
    </Flex>
  )
}

export const Flex = Object.assign(FlexContainer, { Row, Column })
