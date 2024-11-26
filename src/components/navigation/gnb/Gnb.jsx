import { IconButton, TextButton } from '@/components/common/buttons'
import { Flex } from '@/components/layout'
import { Typography } from '@/components/common/typography/Typography'
import { ShortcutEditorIcon, ShortcutMysiteIcon } from '@/components/icon/dashboard/Dashboard'
import useEnvInfo from '@/hooks/useEnvInfo'
import { sliceDomainHttps } from '@/js/util/dashboardUtil'
import useSiteInfo from '@/recoil/siteInfo/useSiteInfo'
import { LineSC } from '@/styles/components/global'
import { ThemeProvider, useMediaQuery } from '@mui/material'
import Menu from '@mui/material/Menu'
import Link from 'next/link'
import { HamburgerIcon, MobileMyPageIcon, MobileMysiteIcon, QshopLogo } from './asset/index'
import * as SC from './Gnb.styles'
import useGnbEvent from './hook/useGnbEvent'

const Gnb = ({ handleOpenLnb }) => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { data, handleClickMenu, siteDomain, openMyInfo, anchorMyInfo, setAnchorMyInfo } = useGnbEvent()
  const { siteInfo: { siteId = '' } = {} } = useSiteInfo()
  const { envInfo } = useEnvInfo()

  return (
    <SC.Container>
      <Flex justify="space-between" align="center" bg="#fff" h="100%">
        <SC.LogWrapper align="center" pl="20px" h="100%" isMobile={isMobile}>
          <Link href="/">
            <QshopLogo />
          </Link>
        </SC.LogWrapper>

        <Flex align="center" w="fit-content" gap={isMobile ? '12px' : '16px'} mr="20px">
          {envInfo !== 'production' && (
            <Flex.Column w="fit-content">
              <Typography.Body2 c="#666666">
                env : <span style={{ color: 'black' }}>{envInfo}</span>
              </Typography.Body2>

              <Typography.Body2 c="#666666">
                site id : <span style={{ color: 'black' }}>{siteId}</span>
              </Typography.Body2>
            </Flex.Column>
          )}

          {isMobile ? (
            <>
              <IconButton onClick={() => handleClickMenu('lp')}>
                <MobileMysiteIcon />
              </IconButton>
              <IconButton onClick={() => handleClickMenu('mypage')}>
                <MobileMyPageIcon />
              </IconButton>
              <IconButton onClick={handleOpenLnb}>
                <HamburgerIcon />
              </IconButton>
            </>
          ) : (
            <>
              <TextButton td="none" c="#999999" leftIcon={<ShortcutMysiteIcon />} onClick={() => handleClickMenu('lp')}>
                내 사이트 바로가기
              </TextButton>
              <SC.Divider />
              <TextButton td="none" c="#999999" leftIcon={<ShortcutEditorIcon />} onClick={() => handleClickMenu('ed')}>
                에디터 바로가기
              </TextButton>
              <SC.Divider />
              <Flex.Column w="120px" style={{ cursor: 'pointer' }} onClick={e => setAnchorMyInfo(e.currentTarget)}>
                <Typography.Body2 c="#666666"> {data?.name || '사이트'}</Typography.Body2>
                <Typography.Caption1 c="#999999">
                  {sliceDomainHttps(siteDomain) || 'domain.qshop.ai'}
                </Typography.Caption1>
              </Flex.Column>
            </>
          )}

          <ThemeProvider theme={SC.getMenuTheme()}>
            <Menu anchorEl={anchorMyInfo} open={openMyInfo} onClose={() => setAnchorMyInfo(null)}>
              <SC.CustomMenuItem onClick={() => handleClickMenu('mypage')}>마이페이지</SC.CustomMenuItem>
              <SC.CustomMenuItem onClick={() => handleClickMenu('payment')}>결제정보</SC.CustomMenuItem>
              <LineSC.SolidLine style={{ margin: '10px 0' }} />
              <SC.CustomMenuItem onClick={() => handleClickMenu('logout')}>로그아웃</SC.CustomMenuItem>
            </Menu>
          </ThemeProvider>
        </Flex>
      </Flex>
    </SC.Container>
  )
}

export default Gnb
