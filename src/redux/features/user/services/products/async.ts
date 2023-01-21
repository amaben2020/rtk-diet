import {  createAsyncThunk } from '@reduxjs/toolkit'
import api from "../../../../../api/index";

export const fetchProducts = createAsyncThunk("products/fetchProducts", 
async () => await api.get('products')
)