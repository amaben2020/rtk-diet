//@ts-nocheck

import { createSlice } from '@reduxjs/toolkit';
export const initialState = {
  users: [],
  loading: false,
  error: false,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  // these are synchronous reducers
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload;
      state.loading = true;
      state.error = false;
    },
    createUser: (state, action) => {
      state.users.unshift(action.payload);
      state.loading = false;
    },
    deleteUser: (state, action) => {
      state.users.filter((user) => user.id !== action.payload.id);
      state.loading = false;
    },

  },
});

// action creators with dispatches
export const userCreator = (item): AppThunk  => dispatch => {
  dispatch(userSlice.actions.createUser(item))
}

export const { createUser, deleteUser, getUser } = userSlice.actions;
export default userSlice.reducer;