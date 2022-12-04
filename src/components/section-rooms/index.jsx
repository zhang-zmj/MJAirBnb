import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../room-item'
import { RoomWrappper } from './style'

const SectionRooms = memo((props) => {

  const { roomList = [], itemWidth } = props
  return (
    <RoomWrappper>
      {roomList.slice(0, 8)?.map(item => {
        return <RoomItem key={item.id} itemData={item} itemWidth={itemWidth} />
      })
      }
    </RoomWrappper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms