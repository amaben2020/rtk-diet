//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { fetchClap, updateClap } from "./services/mediumServices";
 
const initialState = {
  stories:[],
  loading: false,
  error: false
},

mediumSlice = createSlice({
  name: 'medium',
  initialState: initialState,
  extraReducers: {
  [fetchClap.pending]: (state, action) => {
      state.loading = true
   },
  [fetchClap.fulfilled]: (state, action) => {
    state.loading = false
    state.stories = action.payload.data;
    state.error = false
  },
  [fetchClap.rejected]: (state, action) => {
  state.loading = false
  state.stories = []
  state.error = true
  },
  [updateClap.rejected]: (state, action) => {
  state.loading = false
  state.stories = []
  state.error = true
  },
  [updateClap.fulfilled]: (state, action) => {
  state.loading = false
  // you could mutate the state directly because of immer
 state.stories[Number(action.payload.data.id) - 1].claps += 1;
  state.error = false
  }}
  })

export default mediumSlice.reducer;