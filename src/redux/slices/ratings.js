import { createSlice } from "@reduxjs/toolkit";
import { formatted } from "../../commons/filteringForWeek";

const todayOfWeek = new Date().getDay();
let daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
daysOfWeek = [...daysOfWeek.slice(todayOfWeek), ...daysOfWeek.slice(0, todayOfWeek)];

const ratingsOfWeek = daysOfWeek.reduce((acc, dayOfWeek, idx) => {
    const date = formatted(new Date(new Date().setDate(new Date().getDate() + idx)));
    return { ...acc, [dayOfWeek]: { ratings: 0, date } };
}, {});

const initialState = {
    daysOfWeek,
    ratingsOfWeek,
};

const ratingsSlice = createSlice({
    name: "ratings",
    initialState,
    reducers: {
        setRatings: (state, action) => {
            const { dayOfWeek, ratings } = action.payload;
            state.ratingsOfWeek[dayOfWeek].ratings = ratings;
        },
    },
});

export const { setRatings } = ratingsSlice.actions;
export default ratingsSlice.reducer;
