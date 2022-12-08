import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'
import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoomWrapper } from './style'

const EntireRoom = memo(props => {
  //从redux中获取roomlist数据
  const { roomList, totalCount, isLoading } = useSelector(
    state => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading
    }),
    shallowEqual
  )

  // 事件处理
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandle = useCallback(
    item => {
      dispatch(changeDetailInfoAction(item))
      navigate('/detail')
    },
    [navigate, dispatch]
  )

  return (
    <RoomWrapper>
      <h2 className="title">共{totalCount}出处所</h2>
      <div className="list">
        {roomList.map(item => {
          return <RoomItem itemData={item} itemWidth="20%" key={item.id} itemClick={itemClickHandle} />
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomWrapper>
  )
})

export default EntireRoom
