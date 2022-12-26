/** @format */
import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  client: [],
  status: "loading",
};


export const fetchClient = createAsyncThunk("client/fetchClient", async () => {

});

const clientSlice = createSlice({
  name: "client",
  initialState,
  extraReducers: {
    [fetchClient.pending]: (state) => {
      state.status = "loading";
      state.client = [];
    },
    [fetchClient.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.client = [...action.payload];
    },
    [fetchClient.rejected]: (state) => {
      state.status = "error";
      state.client = [];
    },
  },
});

export const clientReducer = clientSlice.reducer;
