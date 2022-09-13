import { configureStore } from "@reduxjs/toolkit";
import comments from "../modules/commentsSlice";

const store = configureStore({
  reducer: {
    comments,
    
  },
});

export default store;
