import React, { memo, useEffect, useCallback, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import HomeSectionV1 from './c-cpns/home-section-v1'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
// import { isEmptyO } from '@/utils'

const Home = memo(() => {
  /*2、从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    state => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo
    }),
    shallowEqual
  )

  // 数据转换
  const [name, setName] = useState('佛山')
  const tabNames = discountInfo.dest_address?.map(item => item.name)
  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])

  /*1、派发异步的事件：发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction('xxxx'))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="discount">
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} />
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
          <SectionRooms roomList={discountInfo.dest_list?.[name]} itemWidth="33.3333%" />
        </div>
        <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  )
})

export default Home
