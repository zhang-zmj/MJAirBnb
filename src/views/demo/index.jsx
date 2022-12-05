import Indicator from '@/base-ui/indicator'
import React, { memo } from 'react'
import { useState } from 'react'
import { DemoWrapper } from './style'

const Demo = memo(() => {
  const names = ['abc', 'cba', 'aaab', 'bbb', 'eddd', 'ccc', 'dddd', 'cdcdcdcd', 'yhn', 'abddd', 'eeee', 'rrrr']
  const [selectIndex, setSelectIndex] = useState(0)

  function taggleClickHandle(isNext = true) {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) {
      newIndex = names.length - 1
    }
    if (newIndex > names.length - 1) {
      newIndex = 0
    }
    setSelectIndex(newIndex)
  }

  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={e => taggleClickHandle(false)}>上一个</button>
        <button onClick={e => taggleClickHandle(true)}>下一个</button>
      </div>
      <div className="list">
        <Indicator selectIndex={selectIndex}>
          {names.map(item => {
            return <button key={item}>{item}</button>
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

export default Demo
