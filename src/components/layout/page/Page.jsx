import * as SC from './Page.styles'

const Page = ({ children, ...rest }) => {
  return <SC.Container {...rest}>{children}</SC.Container>
}

export default Page
