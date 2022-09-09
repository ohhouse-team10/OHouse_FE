import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api";

/** USER TOKEN */
const userToken = localStorage.getItem("access-token")
  ? localStorage.getItem("access-token")
  : null;

/** InitialState */
const initialState = {
  loading: false,

  userInfo: null, // 유저데이터를 받아서 넣음.
  profileImg: "", // 프로필 이미지
  userToken, // isLogedIn값과 마찬가지 , 로그인한 사용자인지 아닌지 판별

  // 중복관련 variables
  nickMsg: null, // 중복체크 메시지
  idMsg: null, // 중복체크 메시지
  nickErrorMsg: null, // 중복체크 닉네임 메시지
  idErrorMsg: null, // 중복체크 아이디 메시지
  duplicateSuccess: false, // 중복 감지 체크 (감지이면 true 아니면 false)

  loginSuccess: false,
  error: null,
  success: false,
};

/** THUNK */
export const userLogin = createAsyncThunk(
  "user/login",
  async (payload, {getState, rejectWithValue}) => {
    console.log(payload);
    const {user} = getState();
    console.log(user);
    try {
      const response = await api.post("/api/login", payload);
      localStorage.setItem("access-token", response.headers.authorization);
      return response;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

/** USERSLICE */
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("access-token");
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: {},
});

export default userSlice.reducer;
