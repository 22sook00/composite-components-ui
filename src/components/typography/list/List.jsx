import * as SC from './List.styles'

const ListMain = props => {
  return <SC.ListContainer {...props}>{props.children}</SC.ListContainer>
}

const Item = props => {
  return <SC.ListItem {...props}>{props.children}</SC.ListItem>
}
export const List = Object.assign(ListMain, { Item })
