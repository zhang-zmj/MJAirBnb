import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import { changeHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRoom from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  //发送网络请求，获取数据，并且保存当前的页面等等
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction('xxx'))
    dispatch(changeHeaderConfigAction({ isFixed: true }))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRoom />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire
