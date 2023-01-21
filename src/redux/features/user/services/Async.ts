import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../api/index";

export const GetPosts = createAsyncThunk(
"post/getPosts", async () => await api.get(`posts`)
);

// https://axios-http.com/docs/post_example
export const CreatePost = createAsyncThunk(
"post/createPost",async (post) => await api.post(`post`, post)
);

export const UpdatePost = createAsyncThunk("post/updatePost", async (data) => await api.put("post", data))