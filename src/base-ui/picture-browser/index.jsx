import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon_close'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { BrowerWrapper } from './style'

const PictureBrower = memo(props => {
  const { pictureUrls, closeClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)

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

  function changeCurrentIndex(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) {
      newIndex = pictureUrls.length - 1
    }
    if (newIndex > pictureUrls.length - 1) {
      newIndex = 0
    }
    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }

  return (
    <BrowerWrapper isNext={isNext}>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>

      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={e => changeCurrentIndex(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={e => changeCurrentIndex(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>

        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition key={pictureUrls[currentIndex]} className="pic" timeout="200">
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>

      <div className="preview"></div>
    </BrowerWrapper>
  )
})

PictureBrower.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrower
