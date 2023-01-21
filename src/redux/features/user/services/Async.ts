import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../api/index";

export const GetPosts = createAsyncThunk(
"post/getPosts", async () => await api.get(`posts`)
);

interface IPost{
  id: number,
  body: string,
  excerpt: string
}

// https://axios-http.com/docs/post_example
export const CreatePost = createAsyncThunk(
"post/createPost",async (post: IPost) => await api.post(`posts`, post)
);

export const UpdatePost = createAsyncThunk("post/updatePost", async (data: IPost) => await api.put("posts", data))