import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../api/index";

// if there's a medium clap, increment based on the id
export const updateClap = createAsyncThunk("medium/updateClap", async (medium: any) => await api.put(`stories/${medium?.id}`, medium))

export const fetchClap = createAsyncThunk("medium/fetchClap", async () => await api.get(`stories`))