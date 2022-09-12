import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../server/api";
import {
  setAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../../server/cookie";

/** USER TOKEN */
const userToken = getAccessToken() ? getAccessToken() : null;

/** InitialState */
const initialState = {
  loading: false,
  userInfo: null, // 유저데이터를 받아서 넣음.
  userToken, // isLogedIn값과 마찬가지 , 로그인한 사용자인지 아닌지 판별
  loginSuccess: false,
  error: null,
};

/** THUNK */

// 유저 로그인
export const __userLogin = createAsyncThunk(
  "user/login",
  async (payload, {getState, rejectWithValue}) => {
    console.log(payload);
    const {user} = getState();
    try {
      const response = await api.post("/member/login", payload);
      // localStorage.setItem("access-token", response.headers.authorization);
      setAccessToken(response.headers.authorization);
      return response;
    } catch (error) {
      console.log(user);
      //setAccessToken("Temp-Token");
      return rejectWithValue(error.message);
    }
  }
);

// 유저 회원가입
export const __register = createAsyncThunk(
  "user/register",
  async (payload, {rejectWithValue}) => {
    try {
      console.log(payload);
      await api.post("/member/signup", payload);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const userLogin = createAsyncThunk(
//   "user/login",
//   async (payload, {getState, rejectWithValue}) => {
//     console.log(payload);
//     const {user} = getState();
//     console.log(user);
//     try {
//       const response = await api.post("/api/login", payload);
//       // localStorage.setItem("access-token", response.headers.authorization);
//       return response;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

/** USERSLICE */
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state = initialState;
    },
  },
  extraReducers: {
    [__userLogin.pending]: (state, payload) => {
      state.loading = true;
    },
    [__userLogin.fulfilled]: (state, payload) => {
      state.loading = false;
      state.loginSuccess = true;
      state.userInfo = payload.data;
      state.userToken = getAccessToken();
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
