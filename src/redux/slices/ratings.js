import { createSlice } from "@reduxjs/toolkit";

const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

const initialState = {
    week: daysOfWeek,
    ratingsOfWeek: daysOfWeek.reduce((acc, dayOfWeek, idx) => ({ ...acc, [dayOfWeek]: { ratings: 0, date: null } }), {}),
};

const ratingsSlice = createSlice({
    name: "ratings",
    initialState,
    reducers: {
        setWeek: (state, action) => {
            const day = action.payload;
            state.week = [...daysOfWeek.slice(day), ...daysOfWeek.slice(0, day)];
        },
        setRatings: (state, action) => {
            const { dayOfWeek, ratings } = action.payload;
            state.ratingsOfWeek[dayOfWeek].ratings = ratings;
        },
    },
});

export const { setRatings, setWeek } = ratingsSlice.actions;
export default ratingsSlice.reducer;
