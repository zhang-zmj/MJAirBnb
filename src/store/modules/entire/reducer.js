import * as actionTypes from './constants'

const initialState = {
  curretPage: 0,
  roomList: [],
  totalCount: 0,

  isLoading: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ChANGE_CURRENT_PAGE:
      return { ...state, curretPage: action.curretPage }
    case actionTypes.ChANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList }
    case actionTypes.ChANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    case actionTypes.ChANGE_IS_LOADING:
      return {...state, isLoading: action.isLoading}
    default:
      return state
  }
}


export default reducer