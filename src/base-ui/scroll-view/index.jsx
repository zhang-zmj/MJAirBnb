import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { memo, useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo(props => {
  const [showRight, setShowRight] = useState(false)
  const [showLeft, setShowLeft] = useState(false)

  //多次刷新的时候记录数据
  const posIndexRef = useRef(0)
  const totalDistanceRef = useRef()

  /** 组件渲染完毕, 判断是否显示右侧的按钮 */
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth
    setShowRight(totalDistance > 0)
    totalDistanceRef.current = totalDistance
  }, [props.children])

  // 事件处理的逻辑
  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndexRef.current + 1 : posIndexRef.current - 1
    const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    posIndexRef.current = newIndex
    // 是否继续显示右侧的按钮
    setShowLeft(newOffsetLeft > 0)
    setShowRight(totalDistanceRef.current > newOffsetLeft)
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div className="control left" onClick={e => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={e => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

export default ScrollView
