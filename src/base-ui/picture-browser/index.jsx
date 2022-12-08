import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { BrowerWrapper } from './style'

const PictureBrower = memo(props => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  return <BrowerWrapper>PictureBrowere</BrowerWrapper>
})

PictureBrower.propTypes = {}

export default PictureBrower
