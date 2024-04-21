import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    history: null,
};

const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        setHistory: (state, action) => {
            state.history = action.payload;
        },
    },
});

export const { setHistory } = historySlice.actions;
export default historySlice.reducer;
