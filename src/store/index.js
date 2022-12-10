/** @format */

import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "../features/calculator/calculator";

export const store = configureStore({
  reducer: { calc: calculatorSlice },
});
