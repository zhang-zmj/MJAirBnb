import RoomItem from '@/components/room-item'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
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

  return (
    <RoomWrapper>
      <h2 className="title">共{totalCount}出处所</h2>
      <div className="list">
        {roomList.map(item => {
          return <RoomItem itemData={item} itemWidth="20%" key={item.id} />
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomWrapper>
  )
})

export default EntireRoom
