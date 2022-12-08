import IconClose from '@/assets/svg/icon_close'
import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { BrowerWrapper } from './style'

const PictureBrower = memo(props => {
  const { pictureUrls, closeClick } = props
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  //关闭按钮的监听
  function closeBtnClickHandle() {
    if (closeClick) closeClick()
  }

  return (
    <BrowerWrapper>
      <div className="top">
        <div className="close-btn" onClick={closeClick}>
          <IconClose />
        </div>
      </div>
      <div className="list"></div>
      <div className="indicator"></div>
    </BrowerWrapper>
  )
})

PictureBrower.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrower
