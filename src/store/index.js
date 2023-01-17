/** @format */

import {configureStore} from "@reduxjs/toolkit";

import calculatorSlice from "./slice/calculator/calculator";
import {authReducer} from "./slice/auth/auth";

export const store = configureStore({
    reducer: {calc: calculatorSlice, auth: authReducer},
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
