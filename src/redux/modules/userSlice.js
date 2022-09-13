import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../server/api";
import {
  setAccessToken,
  getAccessToken,
  removeAccessToken,
  setRefreshToken,
  getRefreshToken,
  removeRefreshToken,
} from "../../server/cookie";

/** USER TOKEN */
const userAccessToken = getAccessToken() ? getAccessToken() : null;
const userRefreshToken = getRefreshToken() ? getRefreshToken() : null;

/** InitialState */
const initialState = {
  loading: false,
  userInfo: null, // 유저데이터를 받아서 넣음.
  userAccessToken, // isLogedIn값과 마찬가지 , 로그인한 사용자인지 아닌지 판별
  userRefreshToken,
  loginSuccess: false,
  error: null,
};

/** THUNK */

// 유저 로그인
export const __userLogin = createAsyncThunk(
  "user/login",
  async (payload, thunkAPI) => {
    try {
      const response = await api.post("/member/login", payload);
      setAccessToken(response.headers.authorization);
      setRefreshToken(response.headers.refreshtoken);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 유저 회원가입
export const __register = createAsyncThunk(
  "user/register",
  async (payload, {rejectWithValue}) => {
    try {
      await api.post("/member/signup", payload);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/** USERSLICE */
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      removeAccessToken();
      removeRefreshToken();
      localStorage.removeItem("user");
      return (state = initialState);
    },
    loadUser: (state, {payload}) => {
      return (state = payload);
    },
  },
  extraReducers: {
    [__userLogin.pending]: (state, payload) => {
      state.loading = true;
    },
    [__userLogin.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.loginSuccess = true;
      state.userInfo = payload.data?.data;
      state.userAccessToken = getAccessToken();
      state.userRefreshToken = getRefreshToken();
      state.error = null;
      // console.log(
      //   state.loading,
      //   state.loginSuccess,
      //   state.userInfo,
      //   state.userAccessToken,
      //   state.userRefreshToken,
      //   state.error
      // );
      localStorage.setItem("user", JSON.stringify(state));
    },
    [__userLogin.rejected]: (state, payload) => {
      state.loading = false;
      state.error = payload;
      console.log(state.error);
    },
    [__register.pending]: (state, payload) => {
      state.loading = true;
    },
    [__register.fulfilled]: (state, payload) => {
      state.loading = false;
    },
    [__register.rejected]: (state, payload) => {
      state.loading = false;
      state.error = payload;
      console.log(state.error);
    },
  },
});

export default userSlice.reducer;
export const {logout, loadUser} = userSlice.actions;
