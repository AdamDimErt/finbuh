/** @format */

import { configureStore } from "@reduxjs/toolkit";

import calculatorSlice from "./slice/calculator/calculator";
import userSlice from "./slice/user/user";

export const store = configureStore({
  reducer: { calc: calculatorSlice, user: userSlice },
});
