import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SectionV1Wrapper } from './style'
import SectionRooms from '@/components/section-rooms'
import SectionHeader from '@/components/section-header'

const HomeSectionV1 = memo(props => {
  const { infoData } = props
  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title ?? ''} subtitle={infoData.subtitle ?? ''} />
      <SectionRooms roomList={infoData.list ?? []} itemWidth="25%" />
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1
