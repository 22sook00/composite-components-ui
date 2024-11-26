import TokenStorage from '@/api/token'
import Alert from '@/components/common/alert/Alert'
import useAlert from '@/components/common/alert/useAlert'
import { Flex } from '@/components/layout'
import ProgressBar from '@/components/common/progressBar/ProgressBar'
import useDisclosure from '@/hooks/use-disclosure/useDisclosure'
import useChannelTalk from '@/hooks/useChannelTalk'
import useOpenReplay from '@/hooks/useOpenReplay'
import usePageProgressBar from '@/hooks/usePageProgressBar'
import { userState } from '@/recoil/user/atom'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { Gnb, Lnb } from '@/components/navigation'
import { withAuth } from './hoc/withAuth'
import * as SC from './Layout.styles'
import { Popup, usePopup } from '@/components/overlay/popup'

const Layout = ({ children }) => {
  const [isViewChannelTalk, setIsViewChannelTalk] = useState(true)

  const router = useRouter()

  const setInitUser = useSetRecoilState(userState)
  const { isViewProgressBar, loadingState } = usePageProgressBar()
  const { title, message, descriptions, isOpen, closeAlert } = useAlert()
  const { popups } = usePopup()

  const [mobileLnbOpen, { open: openMobileLnb, close: closeMobileLnb }] = useDisclosure(false)

  const { openChannelTalk } = useChannelTalk({
    openCallback: () => setIsViewChannelTalk(false),
    hiddenCallback: () => setIsViewChannelTalk(true),
  })

  /** mobile lnb 활성화 메뉴 스크롤 이벤트 */
  const scrollToActiveMenu = () => {
    const activeMenu = document.querySelector('[data-active="true"]')
    if (activeMenu) {
      activeMenu.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  /**
   * open replay 세팅
   */
  const { setUserId } = useOpenReplay()

  useEffect(() => {
    const payload = TokenStorage.getTokenPayload()

    if (payload?.email) {
      // email 이 있을 때만 open replay 실행
      setUserId(payload.email)
      setInitUser({ email: payload.email })
    }
  }, [])

  useEffect(() => {
    if (mobileLnbOpen) closeMobileLnb()
  }, [router.asPath])

  useEffect(() => {
    scrollToActiveMenu()
  }, [mobileLnbOpen])

  return (
    <>
      {isViewProgressBar && (
        <ProgressBar height={'4px'} backgroundColor={'transparent'} position={'fixed'} value={loadingState} />
      )}

      <Flex h="100vh" style={{ overflow: 'hidden' }}>
        <Gnb handleOpenLnb={openMobileLnb} />

        <Lnb open={mobileLnbOpen} handleCloseLnb={closeMobileLnb} />

        <SC.MainContainer>
          <SC.Main>{children}</SC.Main>
        </SC.MainContainer>

        {/* 채널톡 */}
        <SC.ChannelTalkIcon onClick={() => openChannelTalk()} isView={isViewChannelTalk}>
          <Image src={'/admin/images/favicon.png'} alt="qshop-log" width={40} height={40} />
        </SC.ChannelTalkIcon>
      </Flex>

      {isOpen && <Alert title={title} message={message} descriptions={descriptions} closeAlert={closeAlert} />}

      {/* 전역 popup 배열 */}
      {popups?.map((popup, index) => (
        <Popup key={`popup_${popup.id}_${index}`} {...popup} />
      ))}
    </>
  )
}

export default withAuth(Layout)
