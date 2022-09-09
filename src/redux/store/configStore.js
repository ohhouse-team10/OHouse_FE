import { configureStore } from "@reduxjs/toolkit";
import comments from "../modules/comments";

const store = configureStore({
  reducer: {
    comments,
    
  },
});

export default store;
