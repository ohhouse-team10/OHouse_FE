import {configureStore} from "@reduxjs/toolkit";
import user from "../modules/userSlice";
import post from "../../redux/modules/PostSlice"

const store = configureStore({
  reducer: {user,post:post},
});

export default store;
