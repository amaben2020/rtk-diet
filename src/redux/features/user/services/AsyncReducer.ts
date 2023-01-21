 
//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { GetPosts, CreatePost, UpdatePost } from "./Async";
export const initialState = {
  posts: [],
  loading: false,
  error: null,
};
export const postSlice = createSlice({
name: "post",
initialState: initialState,
extraReducers: {
   [GetPosts.fulfilled]: (state, action) => {
     state.posts = action.payload.data;
   },
   [GetPosts.rejected]: (state, action) => {
    state.posts = [];
   },
   [CreatePost.fulfilled]: (state, action) => {
   state.posts.unshift(action.payload.data);
   },
   [UpdatePost.fulfilled]: (state, action) => {
      const updateUser = (array, id, data) => {
        const objectID = array.findIndex((elem) => elem.id === id);
        const objectToUpdate = array[objectID];
        return {
          ...objectToUpdate,
          ...data,
        };
      };
     return updateUser(state.posts, action.payload.data.id, action.payload.data);
    },
    [UpdatePost.rejected]: (state, action) => {
      state.posts.unshift(action.payload.data);
      },
 },
});
export default postSlice.reducer;