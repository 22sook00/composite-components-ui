import { getSites } from '@/api/setting/siteApi'
import useSiteInfo from '@/recoil/siteInfo/useSiteInfo'
import { Loading } from '@/components/feedback'
import { useQuery } from 'react-query'
import { useState } from 'react'

export const withAuth = Component => props => {
  const { setPlan, setSiteInfo } = useSiteInfo()
  const [mount, setMount] = useState(false)

  const { isFetched } = useQuery('siteInfo', () => getSites(), {
    onSuccess: data => {
      // 데모 사이트면 404 페이지로 리다이렉트
      const isDemo = data?.isDemo
      if (isDemo) {
        window.location.href = '/404'
        return
      }
      const plan = data?.plan || 'free'

      setSiteInfo(data)
      setPlan(plan)

      setMount(true)
    },
  })

  return isFetched && mount ? <Component {...props} /> : <Loading />
}
