import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import ratings from "./slices/ratings";
import history from "./slices/history";

const rootReducer = combineReducers({
    ratings,
    history,
});

export default configureStore({ reducer: rootReducer });
