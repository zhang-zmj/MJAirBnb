import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import DetailInfos from './c-cpns/detail-infos'
import DetailPictures from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const detail = memo(() => {
  const { detailInfo } = useSelector(
    state => ({
      detailInfo: state.detail.detailInfo
    }),
    shallowEqual
  )
  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfos />
    </DetailWrapper>
  )
})

export default detail
