import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'
import Rating from '@mui/material/Rating'

import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { useRef, useState } from 'react'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const RoomItem = memo(props => {
  const { itemData, itemWidth = '25%' } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const sliderRef = useRef()

  function controlClickHandle(isRight = true) {
    isRight ? sliderRef.current.next() : sliderRef.current.prev()

    //获取点中之后的索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    let lenght = itemData.picture_urls.lenght
    if (newIndex < 0) newIndex = lenght - 1
    if (newIndex < lenght - 1) newIndex = 0
    setSelectIndex(newIndex)
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

          <div className="indicator">
            <Indicator selectIndex={selectIndex}>
              {itemData?.picture_urls?.map((item, index) => {
                return (
                  <div className="item" key={item}>
                    <span className={classNames('dot', { active: selectIndex === index })}></span>
                  </div>
                )
              })}
            </Indicator>
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
