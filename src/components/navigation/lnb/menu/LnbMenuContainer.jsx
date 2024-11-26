import { TextButton } from '@/components/common/buttons'
import { Flex } from '@/components/layout'

import { useState } from 'react'
import LnbMenu from './LnbMenu'
import * as SC from './LnbMenu.styles'
import { STORE_OPERATE, STORE_PARTNER, STORE_SETTING } from './constant/tabMenu'
import useGnbEvent from '@/components/navigation/gnb/hook/useGnbEvent'

const LnbMenuContainer = ({ isMobile, tabValue }) => {
  const [activeMenu, setActiveMenu] = useState('')

  const { handleClickMenu } = useGnbEvent()

  return (
    <SC.LnbMenuContainer
      gap={isMobile ? (tabValue === 2 ? '0px' : '32px') : '0px'}
      p={isMobile ? (tabValue === 2 ? '8px 0px 0px 0px' : '32px 0px 0px 0px') : '8px'}
    >
      {tabValue === 0 &&
        STORE_OPERATE.map(menu => (
          <LnbMenu
            key={menu.id}
            menu={menu}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            isMobile={isMobile}
          />
        ))}
      {tabValue === 1 &&
        STORE_SETTING.map(menu => (
          <LnbMenu
            key={menu.id}
            menu={menu}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            isMobile={isMobile}
          />
        ))}
      {tabValue === 2 &&
        STORE_PARTNER.map(menu => (
          <LnbMenu
            key={menu.id}
            menu={menu}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            isMobile={isMobile}
          />
        ))}

      {isMobile && (
        <Flex align="center" h="82px" bg="#F8F8F8" mt="auto">
          <TextButton ml="20px" size="sm" onClick={() => handleClickMenu('logout')}>
            로그아웃
          </TextButton>
        </Flex>
      )}
    </SC.LnbMenuContainer>
  )
}

export default LnbMenuContainer
