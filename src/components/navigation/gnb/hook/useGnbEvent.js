import authInstance from '@/api/authInstance'
import { getDashboard } from '@/api/dashboard/dashboardApi'
import TokenStorage from '@/api/token/token-storage'

import useEnvInfo from '@/hooks/useEnvInfo'
import useRedirectUrl from '@/hooks/useRedirectUrl'

import { useRouter } from 'next/router'
import { useState } from 'react'
import { useQuery } from 'react-query'

const useGnbEvent = () => {
  const [anchorMyInfo, setAnchorMyInfo] = useState(null)
  const openMyInfo = Boolean(anchorMyInfo)

  const router = useRouter()

  const { siteDomain } = useEnvInfo()
  const { redirectEditor, redirectMySite, redirectMySubscribe, redirectMyPayment, redirectMyPage } = useRedirectUrl()

  const { data, isFetched } = useQuery(['dashboardInfo'], () => getDashboard(), {
    select: data => {
      return { domain: data.mySite.domain, name: data.mySite.name }
    },
  })

  const redirectLivePage = () => {
    window.open(`${siteDomain}`, '_blank')
  }
  const handleClickMenu = type => {
    setAnchorMyInfo(null)

    switch (type) {
      case 'lp':
        return redirectLivePage()
      case 'ed':
        return redirectEditor()
      case 'mysite':
        return redirectMySite()
      case 'subscribe':
        return redirectMySubscribe()
      case 'mypage':
        return redirectMyPage()
      case 'payment':
        return redirectMyPayment()
      case 'logout':
        return handleLogout()
    }
  }
  /** 로그아웃 */
  const handleLogout = async () => {
    try {
      await authInstance.post('/auth/sign-out')
      TokenStorage.clearToken()
      setInitUser({ email: '' })
    } catch (error) {
      router.push(`https://${location.hostname}/login?returnUrl=admin`)
    }
  }

  return {
    openMyInfo,
    anchorMyInfo,
    setAnchorMyInfo,
    handleClickMenu,
    data,
    isFetched,
    siteDomain,
  }
}

export default useGnbEvent
