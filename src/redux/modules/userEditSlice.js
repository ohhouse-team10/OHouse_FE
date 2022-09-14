import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userAPI} from "../../server/api";

/** InitialState */
const initialState = {
  nickname: "",
  profile_image: "",
  statusMessage: "",
};

/** USERSLICE */
const userEditSlice = createSlice({
  name: "userEdit",
  initialState,
  reducers: {
    setNickName: (state, payload) => {
      state.nickname = payload;
    },
    setProfileImage: (state, payload) => {
      state.profile_image = payload;
    },
    setStatusMessage: (state, payload) => {
      state.statusMessage = payload;
    },
  },
});

export default userEditSlice.reducer;
export const {setNickName, setProfileImage, setStatusMessage} =
  userEditSlice.actions;
