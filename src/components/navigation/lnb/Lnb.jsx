import { useMediaQuery } from '@mui/material'
import { useRouter } from 'next/router'
import { memo, useEffect, useState } from 'react'
import * as SC from './Lnb.styles'
import LnbMenuContainer from './menu/LnbMenuContainer'
import LnbSearch from './search/LnbSearch'
import LnbTabs from './tabs/LnbTabs'

const Lnb = ({ open, handleCloseLnb }) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [tabValue, setTabValue] = useState(0)

  const router = useRouter()

  useEffect(() => {
    if (router.pathname.includes('/setting')) return setTabValue(1)
    if (router.pathname.includes('/log')) return setTabValue(1)
    if (router.pathname.includes('/partner')) return setTabValue(2)
    setTabValue(0)
  }, [router, open])

  return (
    <SC.Container open={open}>
      <LnbSearch isMobile={isMobile} handleCloseLnb={handleCloseLnb} />
      <LnbTabs isMobile={isMobile} tabValue={tabValue} setTabValue={setTabValue} />
      <LnbMenuContainer isMobile={isMobile} tabValue={tabValue} />
    </SC.Container>
  )
}

export default memo(Lnb)
