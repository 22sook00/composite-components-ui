import { useRecoilState } from 'recoil'
import { siteInfoState } from './atom'

const useSiteInfo = () => {
  const [siteInfo, setSiteInfo] = useRecoilState(siteInfoState)

  const setPlan = async plan => {
    setSiteInfo(pre => ({
      ...pre,
      plan,
    }))
  }

  return {
    siteInfo,
    plan: siteInfo.plan,
    setPlan,
    setSiteInfo,
  }
}

export default useSiteInfo
