import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  //API 형태
  style: "",
  type: "",
  image: "",
  content: "",
  isLoading: false,
  error: null,
};

export const _addPost = createAsyncThunk(
  // 의미?
  "post/posts",
  async (payload, thunkAPI) => {
    try {
      // "api가져다 쓰는법 물어보기"
      const data = await axios.post("api url");
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [_addPost.pending]: (state) => {
      state.isLoading = true;
    },
    [_addPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      console.log("_addPost", action.payload);
    },
    [_addPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
