import { getHomeGoodPriceData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//参数一：可以在redux-tool中查看
export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (payload) => {
  const res = await getHomeGoodPriceData()
  return res
})


const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {}
  },

  //对数据进行修改
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      console.log(payload);
      state.goodPriceInfo = payload
    }
  }

})

export const { changeGoodPriceInfoAction } = homeSlice.actions

export default homeSlice.reducer

