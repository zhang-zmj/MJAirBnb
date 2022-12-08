import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { PicturesWrapper } from './style'

const DetailPictures = memo(props => {
  const { detailInfo } = useSelector(
    state => ({
      detailInfo: state.detail.detailInfo
    }),
    shallowEqual
  )

  return (
    <PicturesWrapper>
      <div className="top">
        <div className="left">
          <div className="item">
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo.picture_urls.slice(1, 5).map(item => {
            return (
              <div className="item" key={item}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            )
          })}
        </div>
      </div>
    </PicturesWrapper>
  )
})

DetailPictures.propTypes = {}

export default DetailPictures
