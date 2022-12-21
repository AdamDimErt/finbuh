/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  accessToken: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      (state.email = action.payload.email),
        (state.accessToken = action.payload.accessToken),
        (state.id = action.payload.id);
    },
    removeUser(state) {
      (state.email = null), (state.accessToken = null), (state.id = null);
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
