import { Button } from '@/components/common/buttons'
import { Flex } from '@/components/layout'
import { Tabs } from '@/components/common/tabs/Tab'
import { Typography } from '@/components/common/typography/Typography'
import Link from 'next/link'
import * as SC from './Snb.styles'

const Snb = ({
  title,
  subTitle,
  buttonsCompo,
  subTabMenu,
  tabValue,
  setTabValue,
  handleChangeTab,
  subButtonsCompo,
  guideLink = '',
  style,
}) => {
  return (
    <SC.Container style={{ ...style }}>
      <SC.TitleSection>
        <Flex gap="8px" w="fit-content">
          <div>
            <Typography.Title1 c="#121212">{title}</Typography.Title1>
          </div>
          {guideLink && (
            <Link href={guideLink} target="_blank">
              <Button theme="gray" size="sm">
                가이드
              </Button>
            </Link>
          )}
        </Flex>

        <div>{buttonsCompo}</div>
      </SC.TitleSection>
      {subTabMenu && (
        <SC.TabSection>
          <Tabs w="fit-content" value={tabValue} onChange={setTabValue} mt="13px" gap="20px" withBorder={false}>
            <Tabs.List>
              {subTabMenu.map((el, i) => (
                <Tabs.Tab key={`tab-value-${i}`} value={el.value || i} onClickTab={handleChangeTab}>
                  {el.label || el}
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>

          {subButtonsCompo && subButtonsCompo}
        </SC.TabSection>
      )}

      {subTitle && (
        <SC.SubTitleSection>
          <Typography.Title2 w={'fit-content'}>{subTitle}</Typography.Title2>
          {subButtonsCompo && subButtonsCompo}
        </SC.SubTitleSection>
      )}
    </SC.Container>
  )
}

export default Snb
