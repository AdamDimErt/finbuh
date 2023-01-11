/** @format */

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {auth} from "../../../firebase-config";

import {signInWithEmailAndPassword} from "firebase/auth";

const initialState = {
    user: null,
    status: "loading",
};

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async (data) => {
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
            state.status = "loaded";
            state.user = action.payload.user;
        },
        [fetchAuth.rejected]: (state) => {
            state.status = "error";
            state.user = null;
        },
    },
});

export const isAuthSelector = (state) => {

    return Boolean(state.auth.user);
};

export const authReducer = authSlice.reducer;
export const {logout} = authSlice.actions;
