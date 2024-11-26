import { Flex } from '@/components/layout'
import { Tabs } from '@/components/common/tabs/Tab'
import { Typography } from '@/components/common/typography/Typography'
import { ShopIcon, SettingIcon, PartnerIcon } from './asset/index'
import * as SC from './LnbTabs.styles'

const LnbTabs = ({ isMobile, tabValue, setTabValue }) => {
  return (
    <SC.LnbTabsContainer p={isMobile && '0px 20px'}>
      <Tabs grow value={tabValue} onChange={setTabValue} mt={isMobile ? '13px' : '16px'} withBorder={false}>
        <Tabs.List>
          <Tabs.Tab value={0}>
            <Flex.Column gap="6px" align="center">
              {!isMobile && <ShopIcon color={tabValue !== 0 ? '#999999' : '#9D42FB'} />}
              <Typography.Title2 c={tabValue !== 0 ? '#999999' : '#9D42FB'} ta="center">
                운영관리
              </Typography.Title2>
            </Flex.Column>
          </Tabs.Tab>
          <Tabs.Tab value={1}>
            <Flex.Column gap="6px" align="center">
              {!isMobile && <SettingIcon color={tabValue !== 1 ? '#999999' : '#9D42FB'} />}
              <Typography.Title2 c={tabValue !== 1 ? '#999999' : '#9D42FB'} ta="center">
                상점설정
              </Typography.Title2>
            </Flex.Column>
          </Tabs.Tab>
          <Tabs.Tab value={2}>
            <Flex.Column gap="6px" align="center">
              {!isMobile && <PartnerIcon color={tabValue !== 2 ? '#999999' : '#9D42FB'} />}
              <Typography.Title2 ta="center" c={tabValue !== 2 ? '#999999' : '#9D42FB'}>
                성장센터
              </Typography.Title2>
            </Flex.Column>
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </SC.LnbTabsContainer>
  )
}

export default LnbTabs
