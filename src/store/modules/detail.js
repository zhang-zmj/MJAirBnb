import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detailInfo: {}
  },

  //对数据进行修改
  reducers: {
    changeDetailInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  }
})

export const {
  changeDetailInfoAction
} = detailSlice.actions

export default detailSlice.reducer

