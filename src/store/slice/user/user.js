/** @format */
import {collection, getDocs} from "firebase/firestore";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {db} from "../../../firebase-config";
import moment from "moment";
import 'moment/locale/ru'

const initialState = {

    clients: [],
    status: 'loading'

};


export const fetchClient = createAsyncThunk("client/fetchClient", async () => {
    const colRef = collection(db, "users");
    const data = await getDocs(colRef);
    const client = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        time: moment.unix(doc._document.createTime.timestamp.seconds).locale('ru').format("llll")

    }))
    return client
});

const clientSlice = createSlice({
    name: "client",
    initialState,
    extraReducers: {
        [fetchClient.pending]: (state) => {
            state.status = "loading";
            state.clients = [];
        },
        [fetchClient.fulfilled]: (state, action) => {
            state.status = "loaded";
            state.clients = [...action.payload];
        },
        [fetchClient.rejected]: (state) => {
            state.status = "error";
            state.clients = [];
        },
    },
});

export const clientReducer = clientSlice.reducer;
