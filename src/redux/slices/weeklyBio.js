import { createSlice } from "@reduxjs/toolkit";

import { defaultWeek, shiftWeekByDayOfWeek } from "../../commons/dayOfWeek";

const initialState = {
    week: defaultWeek,
    bio: defaultWeek.reduce((acc, day) => ({ ...acc, [day]: { rating: 0, date: null } }), {}),
};

const ratingsSlice = createSlice({
    name: "weeklyBio",
    initialState,
    reducers: {
        setWeek: (state, action) => {
            state.week = shiftWeekByDayOfWeek(action.payload);
        },
        setRating: (state, action) => {
            const { day, rating, date } = action.payload;

            state.bio[day].rating = rating;
            state.bio[day].date = date;
        },
    },
});

export const { setRating, setWeek } = ratingsSlice.actions;
export default ratingsSlice.reducer;
