import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo(props => {
  const { selectIndex } = props
  const contentRef = useRef()

  useEffect(() => {
    //1、获取selectIndex对应的item
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemLeft = selectItemEl.offsetLeft //获取offsetLeft必须设置定位元素
    const itemWidth = selectItemEl.clientWidth
    //2、content的宽度
    const contentWidth = contentRef.current.clientWidth
    //3、获取selectIndex要滚动的距离
    const distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5

    //4、设置滚动
    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator
