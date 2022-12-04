import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterWrapper } from './style'

const SectoinFooter = memo(props => {
  const { name } = props

  let showMessage = '显示全部'
  if (name) {
    showMessage = `查看更多${name}房源`
  }

  /* 事件处理的逻辑*/
  const navigate = useNavigate()
  function moreClickhandle() {
    navigate('/entire')
  }

  return (
    <FooterWrapper>
      <div className="info">
        <span className="text" onClick={moreClickhandle}>
          {showMessage}
        </span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

SectoinFooter.propTypes = {
  name: PropTypes.string
}

export default SectoinFooter
