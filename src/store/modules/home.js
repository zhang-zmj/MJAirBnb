import { getHomeDiscounntData, getHomeGoodPriceData, getHomeHighScoreData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//参数一：可以在redux-tool中查看
/*
export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (payload) => {
  const res = await getHomeGoodPriceData()
  return res
})
*/

export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch, getState }) => {

  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })

  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })

  getHomeDiscounntData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })

})



const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {}
  },

  //对数据进行修改
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
  },

  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    //   console.log(payload);
    //   state.goodPriceInfo = payload
    // }
  }

})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction
} = homeSlice.actions

export default homeSlice.reducer

