import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    post: [
        {
            "id":1,
            "title":"title",
            "nickname":"@#@@#@#t",
            "statusMessage" : "ddddddddddd",
            "like_num":3
    
    
           }

    ],
    isLoading: false,
    error: null,
};


export const getHouseList = createAsyncThunk(
    "house/getHouseList ",
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get("http://localhost:3001/post");
            console.log(data.data);
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const post = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: {
      
        // getHouseList Thunk
        [getHouseList.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [getHouseList.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.post = action.payload;
            console.log(state);
        },
        [getHouseList.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },

      
    },
});
export default post.reducer;