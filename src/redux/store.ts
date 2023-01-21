import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import counterReducer2 from "./features/counter2/Counter2Slice";
import userSlice from "./features/user/UserSlice";
import postSlice from "./features/user/services/AsyncReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterSlice2: counterReducer2,
    user: userSlice,
    posts: postSlice
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