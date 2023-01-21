//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { GetPosts, CreatePost, UpdatePost } from "./Async";
export const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const postSlice = createSlice({
name: "posts",
initialState,
extraReducers: {
   [GetPosts.fulfilled]: (state, action) => {
     state.posts = action.payload.data;
   },
   [GetPosts.rejected]: (state, action) => {
    state.posts = [];
    state.error = 'Something went wrong'
   },
   [GetPosts.pending]: (state, action) => {
      state.loading = true;
   },
   [CreatePost.fulfilled]: (state, action) => {
   state.posts.unshift(action.payload.data);
   state.loading = false;
   },
   [CreatePost.pending]: (state, action) => {
    state.loading = true;
    },  
    
    [CreatePost.rejected]: (state, action) => {
      state.posts = [];
      state.error = 'Something went wrong'
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
     state.posts =  updateUser(state.posts, action.payload.data.id, action.payload.data);
    },
    [UpdatePost.rejected]: (state, action) => {
      state.posts.error = 'Something went wrong'
    },
 },
});
export default postSlice.reducer;