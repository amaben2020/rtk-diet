import {  createAsyncThunk } from '@reduxjs/toolkit'
import api from "../../../../../api/index";

export const fetchProducts = createAsyncThunk("products/fetchProducts", 
async () => await api.get('products')
)

export const updateProducts = createAsyncThunk("products/updateProducts", 
async (product: any) => await api.put(`products/${product.id}`, product )
)