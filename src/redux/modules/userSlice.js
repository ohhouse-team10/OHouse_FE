import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userAPI} from "../../server/api";

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
      const response = await userAPI.logIn(payload);
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
      await userAPI.signUp(payload);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 유저 로그아웃
export const __userLogOut = createAsyncThunk(
  "user/logout",
  async (payload, thunkAPI) => {
    try {
      await userAPI.logout();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const __userUpdate = createAsyncThunk(
  "user/userUpdate",
  async (payload, thunkAPI) => {
    try {
      const response = await userAPI.userUpdate(payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/** USERSLICE */
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
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
    },
    [__userLogOut.pending]: (state, payload) => {
      state.loading = true;
    },
    [__userLogOut.fulfilled]: (state, payload) => {
      removeAccessToken();
      removeRefreshToken();
      localStorage.removeItem("user");
      return (state = initialState);
    },
    [__userLogOut.rejected]: (state, payload) => {
      state.loading = false;
      state.error = payload;
    },
    [__userUpdate.fulfilled]: (state, {payload}) => {
      state.userInfo = payload.data?.data;
      localStorage.setItem("user", JSON.stringify(state));
      console.log(payload);
    },
    [__userUpdate.rejected]: (state, payload) => {},
  },
});

export default userSlice.reducer;
export const {logout, loadUser} = userSlice.actions;
