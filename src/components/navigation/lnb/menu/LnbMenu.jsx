import { Flex } from '@/components/layout'
import Label from '@/components/common/label/Label'
import { Typography } from '@/components/common/typography/Typography'
import { AngularArrowDownIcon, AngularArrowUpIcon } from '@/components/icon/common/Arrow'
import { color } from '@/styles/values/color'
import Collapse from '@mui/material/Collapse'
import Link from 'next/link'
import * as SC from './LnbMenu.styles'
import { iconMap } from './constant/iconMap'

import useLnbMenu from './hook/useLnbMenu'

/** 서브 메뉴 없는 친구들 */
const noSubMenuIds = ['IAD-00000', 'IAD-F0000', 'IAD-I1000', 'IAD-I2000', 'IAD-I3000', 'IAD-I4000']
/** 모바일 lnb 에서 성장센터 하위 메뉴들은 icon 보여줘야 함 */
const partnerMenuIds = ['IAD-I1000', 'IAD-I2000', 'IAD-I3000', 'IAD-I4000']

const LnbIcon = ({ title }) => {
  return <>{iconMap[title] || null}</>
}

const LnbMenu = ({ menu, activeMenu, setActiveMenu, isMobile }) => {
  const { listOpen, setListOpen, router, handleClickMenu } = useLnbMenu(menu, activeMenu, setActiveMenu)

  return (
    <>
      {isMobile ? (
        <MobileView router={router} menu={menu} handleClickMenu={handleClickMenu} />
      ) : (
        <PcView
          router={router}
          menu={menu}
          handleClickMenu={handleClickMenu}
          open={listOpen}
          handleClick={() => setListOpen(pre => !pre)}
        />
      )}
    </>
  )
}

const PcView = ({ router, menu, handleClickMenu, open, handleClick }) => {
  if (noSubMenuIds.includes(menu.id)) {
    return (
      <SC.LnbMenuList>
        <Link href={menu.path[0]} key={menu.id} onClick={e => handleClickMenu(e, menu.path[0])}>
          <SC.LnbMenuButton open={menu.path.includes(router.pathname)} disableRipple={true}>
            <LnbIcon title={menu.title} />
            <SC.LnbMenuText>
              <Typography.Title2
                c={menu.path.includes(router.pathname) ? color.primary.purple[300] : '#121212'}
                fw={500}
              >
                {menu.title}
              </Typography.Title2>
            </SC.LnbMenuText>
          </SC.LnbMenuButton>
        </Link>
      </SC.LnbMenuList>
    )
  }

  return (
    <SC.LnbMenuList>
      <SC.LnbMenuButton key={menu.id} onClick={handleClick} disableRipple={true}>
        <LnbIcon title={menu.title} />
        <SC.LnbMenuText primary={menu.title} open={open} />
        {open ? <AngularArrowUpIcon color="#AAAAAA" /> : <AngularArrowDownIcon color="#AAAAAA" />}
      </SC.LnbMenuButton>
      <Collapse in={open} timeout={'auto'}>
        {menu.sub.map(el => {
          return (
            <SC.LnbMenuList key={el.id} component="div" disablePadding>
              <Link href={el.path[0]} onClick={e => handleClickMenu(e, el.path[0])}>
                <SC.LnbMenuButton open={el.path.includes(router.pathname)} disableRipple={true}>
                  <Flex justify="space-between" align="center">
                    <SC.LnbMenuText sx={{ marginLeft: '24px' }}>
                      <Typography.Title2
                        c={el.path.includes(router.pathname) ? color.primary.purple[300] : '#121212'}
                        fw={500}
                      >
                        {el.title}
                      </Typography.Title2>
                    </SC.LnbMenuText>
                    {el.isLabel && <Label text={'준비중'} color="primary" />}
                  </Flex>
                </SC.LnbMenuButton>
              </Link>
            </SC.LnbMenuList>
          )
        })}
      </Collapse>
    </SC.LnbMenuList>
  )
}

const MobileView = ({ router, menu, handleClickMenu }) => {
  return (
    <Flex.Column>
      {menu.sub.length !== 0 && (
        <div style={{ padding: '0px 20px', marginBottom: '8px' }}>
          <Typography.Body3 c="#999999">{menu.title}</Typography.Body3>
        </div>
      )}

      {menu.sub.length === 0 && (
        <Link
          href={menu.path[0]}
          key={menu.id}
          onClick={e => handleClickMenu(e, menu.path[0])}
          style={{ width: '100%' }}
        >
          <SC.LnbMenuMobileButton active={menu.path == router.pathname} data-active={menu.path == router.pathname}>
            <Flex gap="8px" align="center">
              {partnerMenuIds.includes(menu.id) && <LnbIcon title={menu.title} />}
              <div>
                <Typography.Title2 fw={500} c={menu.path == router.pathname ? color.primary.purple[300] : '#121212'}>
                  {menu.title}
                </Typography.Title2>
              </div>
            </Flex>

            {menu?.isLabel && <Label text={'준비중'} color="primary" />}
          </SC.LnbMenuMobileButton>
        </Link>
      )}

      {menu.sub.map(el => (
        <Link key={el.id} href={el.path[0]} onClick={e => handleClickMenu(e, el.path[0])} style={{ width: '100%' }}>
          <SC.LnbMenuMobileButton
            align="center"
            justify="space-between"
            active={el.path.includes(router.pathname)}
            data-active={el.path.includes(router.pathname)}
          >
            <div>
              <Typography.Title2 fw={500} c={el.path.includes(router.pathname) ? color.primary.purple[300] : '#121212'}>
                {el.title}
              </Typography.Title2>
            </div>
            {el.isLabel && <Label text={'준비중'} color="primary" />}
          </SC.LnbMenuMobileButton>
        </Link>
      ))}
    </Flex.Column>
  )
}

export default LnbMenu
