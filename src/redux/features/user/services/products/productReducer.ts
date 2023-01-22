//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, updateProducts } from "./async";

const initialState = {
  status: "",
  products: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // omit reducer cases cos its asynchronous
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = 'loading'
      })
      builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'false'
        state.products = action.payload.data
      })
      builder
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'error'
        state.products = []
      })

      builder
      .addCase(updateProducts.pending, (state, action) => {
        state.status = 'loading'
      })
      builder
      .addCase(updateProducts.fulfilled, (state, action) => {
        state.status = 'false'
       state.products = [...state.products, action.payload.data]
      })
      builder
      .addCase(updateProducts.rejected, (state, action) => {
        state.status = 'error'
        state.products = []
      })
  }
})

export default productsSlice.reducer;