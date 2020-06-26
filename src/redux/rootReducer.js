import { combineReducers } from "redux";
import { portfolioReducer } from "./Portfolio/reducer";

export const rootReducer = combineReducers({ portfolio: portfolioReducer });
