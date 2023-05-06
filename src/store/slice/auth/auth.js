import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {auth} from "../../../firebase-config";

import {signInWithEmailAndPassword, signOut,} from "firebase/auth";

const initialState = {
    user: null,
    status: "idle",
};

export const fetchAuth = createAsyncThunk(
    "auth/fetchAuth",
    async ({email, password}, {rejectWithValue}) => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            return userCredential.user;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);

export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async (_, {rejectWithValue}) => {
        try {
            await signOut(auth);
            return null;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(fetchAuth.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload;
                localStorage.setItem("user", JSON.stringify(action.payload));
            })
            .addCase(fetchAuth.rejected, (state) => {
                state.status = "failed";
            })
            // Logout
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.user = null;
                localStorage.removeItem("user");
            });
    },
});

export const selectUser = (state) => state.auth.user;
export const selectAuthStatus = (state) => state.auth.status;

// Добавляем селектор для проверки авторизации в localStorage
export const isAuthSelector = (state) =>
    Boolean(localStorage.getItem("user"))

export const authReducer = authSlice.reducer;
