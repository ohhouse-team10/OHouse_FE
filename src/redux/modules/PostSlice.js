import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
  post: [
    {
      id: 11,
      title: "title",
      nickname: "@#@@#@#t",
      statusMessage: "11",
      like_num: 3,
    },
    {
      id: 12,
      title: "title",
      nickname: "@#@@#@#t",
      statusMessage: "12",
      like_num: 3,
    },
    {
      id: 13,
      title: "title",
      nickname: "@#@@#@#t",
      statusMessage: "13",
      like_num: 3,
    },
    {
      id: 14,
      title: "title",
      nickname: "@#@@#@#t",
      statusMessage: "14",
      like_num: 3,
    },
    {
      id: 15,
      title: "title",
      nickname: "@#@@#@#t",
      statusMessage: "15",
      like_num: 3,
    },
    {
      id: 16,
      title: "title",
      nickname: "@#@@#@#t",
      statusMessage: "16",
      like_num: 3,
    },
    {
      id: 17,
      title: "title",
      nickname: "@#@@#@#t",
      statusMessage: "17",
      like_num: 3,
    },
    {
      id: 18,
      title: "title",
      nickname: "@#@@#@#t",
      statusMessage: "18",
      like_num: 3,
    },
  ],
  isLoading: false,
  error: null,
};

export const getHouseList = createAsyncThunk(
  "house/getHouseList ",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/post");
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const post = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    // getHouseList Thunk
    [getHouseList.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [getHouseList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
      console.log(state);
    },
    [getHouseList.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});
export default post.reducer;
