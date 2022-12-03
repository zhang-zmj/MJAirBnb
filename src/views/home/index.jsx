import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import HomeSectionV1 from './c-cpns/home-section-v1'
import { isEmptyO } from '@/utils'

const Home = memo(() => {
  /*2、从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo } = useSelector(
    state => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo
    }),
    shallowEqual
  )
  /*1、派发异步的事件：发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction('xxxx'))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
