import { createSlice } from "@reduxjs/toolkit";

const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];
const initialState = {
    today: "월",
    ratingsOfWeek: daysOfWeek.reduce((acc, dayOfWeek) => ({ ...acc, [dayOfWeek]: 0 }), {}),
};

const ratingsSlice = createSlice({
    name: "ratings",
    initialState,
    reducers: {
        setRatings: (state, action) => {
            const { dayOfWeek, ratings } = action.payload;
            state.ratingsOfWeek[dayOfWeek] = ratings;
        },
    },
});

export const { setRatings } = ratingsSlice.actions;
export default ratingsSlice.reducer;
