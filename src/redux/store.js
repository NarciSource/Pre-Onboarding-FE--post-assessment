import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import weeklyBio from "./slices/weeklyBio";

const rootReducer = combineReducers({
    weeklyBio,
});

export default configureStore({ reducer: rootReducer });
