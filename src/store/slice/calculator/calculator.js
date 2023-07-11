/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: 50000,
};

const calculatorSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    setPrice(state, action) {
      state.price =
        state.price + state.price * action.payload;
    },
    removePrice(state, action) {
      state.price = Math.ceil(
        (state.price - action.payload) /
          (1.0 + action.payload),
      );
    },
  },
});

export const { setPrice, removePrice } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
