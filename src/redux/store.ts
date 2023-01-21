import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import counterReducer2 from "./features/counter2/Counter2Slice";
import userSlice from "./features/user/UserSlice";
import postSlice from "./features/user/services/AsyncReducer";
import productsSlice from "./features/user/services/products/productReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterSlice2: counterReducer2,
    user: userSlice,
    posts: postSlice,
    products: productsSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;