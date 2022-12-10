import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination'
import { useSelector } from 'react-redux'

const EntirePagination = memo(props => {
  const { totalCount, curretPage, roomList } = useSelector(state => ({
    totalCount: state.entire.totalCount,
    curretPage: state.entire.curretPage,
    roomList: state.entire.roomList
  }))

  const startCount = curretPage * 20 + 1
  const endCount = (curretPage + 1) * 20
  const totalPage = Math.ceil(totalCount / 20)

  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={15} />
          <div className="desc">
            第{startCount}-{endCount}个房源，共超过{totalCount}个
          </div>
        </div>
      )}
    </PaginationWrapper>
  )
})

export default EntirePagination
