import * as SC from './Typography.styles'

const createTypographyComponent = Component => props => {
  return (
    <SC.TextContainer {...props}>
      <Component {...props}>{props.children}</Component>
    </SC.TextContainer>
  )
}

const components = {
  H1: SC.Header1,
  H2: SC.Header2,
  H3: SC.Header3,
  H4: SC.Header4,
  Title1: SC.Title1,
  Title2: SC.Title2,
  Title3: SC.Title3,
  Body1: SC.Body1,
  Body2: SC.Body2,
  Body3: SC.Body3,
  Caption1: SC.Caption1,
  Caption2: SC.Caption2,
}

export const Typography = Object.fromEntries(
  Object.entries(components).map(([key, Component]) => [key, createTypographyComponent(Component)])
)
