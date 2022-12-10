import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon_close'
import IconTriangleBottom from '@/assets/svg/icon_triangle_bottom'
import IconTriangleTop from '@/assets/svg/icon_triangle_top'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import Indicator from '../indicator'
import { BrowerWrapper } from './style'

const PictureBrower = memo(props => {
  const { pictureUrls, closeClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)
  const [isShowList, setIsShowList] = useState(true)

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

  function bottomItemClickHandle(index) {
    if (index > currentIndex) {
      setIsNext(true)
    } else {
      setIsNext(false)
    }

    setCurrentIndex(index)
  }
  return (
    <BrowerWrapper isNext={isNext} isShowList={isShowList}>
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

      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}:
              </span>
              <span>room aparment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={e => setIsShowList(!isShowList)}>
              <span>{isShowList ? '隐藏' : '显示'}照片列表</span>
              {isShowList ? <IconTriangleTop /> : <IconTriangleBottom />}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={classNames('item', { active: currentIndex === index })}
                    key={item}
                    onClick={e => bottomItemClickHandle(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowerWrapper>
  )
})

PictureBrower.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrower
