import React, { memo } from 'react'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'

const index = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner />
    </HomeWrapper>
  )
})

export default index
