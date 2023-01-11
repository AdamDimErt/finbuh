/** @format */

import {configureStore} from "@reduxjs/toolkit";

import calculatorSlice from "./slice/calculator/calculator";
import {authReducer} from "./slice/auth/auth";
import {clientReducer} from "./slice/user/user";

export const store = configureStore({
    reducer: {calc: calculatorSlice, auth: authReducer, user: clientReducer},
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
