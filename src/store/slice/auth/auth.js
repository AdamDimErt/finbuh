/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../../firebase-config";

import { signInWithEmailAndPassword } from "firebase/auth";

const initialState = {
  user: null,
  status: "loading",
};

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async (data) => {
  console.log(data.email);

  try {
    const user = await signInWithEmailAndPassword(auth, data.email, data.password);
    return user;
  } catch (error) {
    console.log(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    // login
    [fetchAuth.pending]: (state) => {
      state.status = "loading";
      state.user = null;
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.status = "loading";
      state.user = action.payload.user;
    },
    [fetchAuth.rejected]: (state) => {
      state.status = "error";
      state.user = null;
    },
  },
});

export const isAuthSelector = (state) => {
  Boolean(state.auth.data);
};

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
