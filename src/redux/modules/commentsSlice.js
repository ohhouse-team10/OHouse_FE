import { SignalCellularNoSimOutlined } from "@mui/icons-material";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { commentAPI } from "../../server/api";

const BASE_URL = "http://localhost:3001";

/* InitialState */
// data, isLoading, error로 상태관리
const initialState = {
  Comments: [],
  isLoading: false,
  error: null,
};

/* Thunk function */
// [GET - 데이터 전체 조회]
export const getComments = createAsyncThunk(
  "GET_ALL_Comments",
  async (payload, thunkAPI) => {
    try {
      // const { data } = await axios.get(`${BASE_URL}/comments`);
      const { data } = await commentAPI.getComment(payload.id);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// [POST]
export const addComments = createAsyncThunk(
  "POST_Comments",
  async (payload, thunkAPI) => {
    try {
      // const { data } = await axios.post(`${BASE_URL}/comments`, payload);
      const { data } = await commentAPI.postComment(
        { content: payload.content },
        payload.id
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (errer) {
      return thunkAPI.rejectWithValue(errer);
    }
  }
);

// [UPDATE]
export const updateComments = createAsyncThunk(
  "UPDATAE_Comments",
  async (payload, thunkAPI) => {
    try {
      // console.log(payload);
      // const response = await axios.put(
      //   `${BASE_URL}/comments/${payload.id}`,
      //   payload
      // );
      const { data } = await commentAPI.putComment(
        { content: payload.content },
        payload.comment_id
      );
      console.log("data", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// [DELETE]
export const deleteComments = createAsyncThunk(
  "DELETE_Comments",
  async (payload, thunkAPI) => {
    try {
      // await axios.delete(`${BASE_URL}/comments/${payload}`);
      await commentAPI.deleteComment(payload.comment_id);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/* createSlice */
export const CommentsSlice = createSlice({
  // 모듈 이름
  name: "comments",
  // 초기 상태값
  initialState,
  // reducers
  reducers: {},
  //extraReducers
  extraReducers: {
    /* Pending */
    [getComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    /* Fulfilled */
    [getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = [action.payload];
      console.log(state);
    },
    [addComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments[0].data = state.comments[0].data
        .concat(action.payload)
        .map((item) => item);
      return state;
    },
    [updateComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(current(state));
      console.log(action);

      const newState = state.comments[0].data.map((item) =>
        action.meta.arg.comment_id === item.comment_id
          ? { ...item, content: action.meta.arg.content }
          : item
      );
      state.comments[0].data = newState;
      console.log(current(state));
      return state;
    },
    [deleteComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      const newState = state.comments[0].data.filter(
        (item) => item.comment_id !== action.payload.comment_id
      );
      state.comments[0].data = newState;
      return state;
    },
    /* Rejected */
    [getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [updateComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

/* export */
export const {} = CommentsSlice.actions;
export default CommentsSlice.reducer;
