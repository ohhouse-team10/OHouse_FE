import {configureStore} from "@reduxjs/toolkit";
import user from "../modules/userSlice";
import post from "../../redux/modules/PostSlice"
import comments from "../modules/commentsSlice";

const store = configureStore({
  reducer: {user,post:post,comments},
});

export default store;
