import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomWrapper } from './style'

const EntireRoom = memo(props => {
  return (
    <RoomWrapper>
      <div>index</div>
    </RoomWrapper>
  )
})

EntireRoom.propTypes = {}

export default EntireRoom
