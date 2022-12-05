import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'
import Rating from '@mui/material/Rating'

import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { useRef } from 'react'

const RoomItem = memo(props => {
  const { itemData, itemWidth } = props
  const sliderRef = useRef()

  function controlClickHandle(isRight = true) {
    isRight ? sliderRef.current.next() : sliderRef.current.prev()
  }

  return (
    <ItemWrapper verifyColor={itemData?.verify_info?.text_color || '#39576a'} itemWidth={itemWidth}>
      <div className="inner">
        <div className="swiper">
          <div className="control">
            <div className="btn left" onClick={e => controlClickHandle(false)}>
              <IconArrowLeft width="30" height="30" />
            </div>
            <div className="btn right" onClick={e => controlClickHandle(true)}>
              <IconArrowRight width="30" height="30" />
            </div>
          </div>
          <Carousel dots={false} ref={sliderRef}>
            {itemData?.picture_urls?.map(item => {
              return (
                <div className="cover">
                  <img src={itemData.picture_url} alt="" />
                </div>
              )
            })}
          </Carousel>
        </div>

        <div className="desc">{itemData.verify_info.messages.join(' · ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            value={itemData.start_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: '12px', color: '#00848A', marginRight: '-1px' }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && <span className="extra">·{itemData.bottom_info?.content}</span>}
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem
