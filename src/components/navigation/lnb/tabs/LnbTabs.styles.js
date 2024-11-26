import { Flex } from '@/components/layout/flex/Flex'
import { color } from '@/styles/values/color'
import styled from '@emotion/styled'
import SIZE from '@/components/layout/layout/constant/size'

export const LnbTabsContainer = styled(Flex)`
  height: ${SIZE.LNB_TABS.height}px;
  border-bottom: 1px solid ${color.border.default};

  @media screen and (max-width: 768px) {
    position: sticky;
    top: ${SIZE.LNB_SEARCH.height}px;
    z-index: 10;
    width: 100%;
    height: auto;
    background-color: white;
  }
`
