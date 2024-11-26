import { Flex } from '@/components/layout/flex/Flex'
import SIZE from '@/components/layout/layout/constant/size'
import { color } from '@/styles/values/color'
import styled from '@emotion/styled'
import MuiList from '@mui/material/List'
import MuiListItemButton from '@mui/material/ListItemButton'
import MuiListItemText from '@mui/material/ListItemText'

export const LnbMenuContainer = styled(Flex.Column)`
  height: calc(100% - ${SIZE.LNB_SEARCH.height + SIZE.LNB_TABS.height}px);

  overflow: auto;

  ul {
    padding: 0px;
  }

  ::-webkit-scrollbar {
    display: none !important;
  }

  -ms-overflow-style: none !important; /* 인터넷 익스플로러 */
  scrollbar-width: none !important; /* 파이어폭스 */

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: auto;
    min-height: 85dvh;
  }
`

export const LnbMenuList = styled(MuiList)`
  width: 100%;
`

export const LnbMenuButton = styled(MuiListItemButton)`
  padding: 8px;
  border-radius: 5px;
  background-color: ${({ open }) => (open ? '#FAF5FF' : 'transaprent')};
  color: ${({ open }) => (open ? color.primary.purple[300] : '#121212')};

  :hover {
    background-color: ${({ open }) => (open ? '#FAF5FF' : 'transaprent')};
  }
`

export const LnbMenuMobileButton = styled(Flex)`
  padding: 13px 20px;
  background-color: ${({ active }) => (active ? '#FAF5FF' : 'transaprent')};
  :hover {
    background-color: ${({ active }) => (active ? '#FAF5FF' : 'transaprent')};
  }
`

export const LnbMenuText = styled(MuiListItemText)`
  .MuiTypography-root {
    width: fit-content;
    margin-left: 12px;
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
  }
`
