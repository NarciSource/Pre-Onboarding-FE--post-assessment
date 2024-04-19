import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import ratings from "./slices/ratings";

const rootReducer = combineReducers({
    ratings,
});

export default configureStore({ reducer: rootReducer });
