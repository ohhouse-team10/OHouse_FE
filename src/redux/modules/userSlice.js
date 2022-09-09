import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api";

const userToken = localStorage.getItem("access-token")
  ? localStorage.getItem("access-token")
  : null;

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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;
