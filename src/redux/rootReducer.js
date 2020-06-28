import { combineReducers } from "redux";
import { portfolioReducer } from "./Portfolio/reducer";
import { mainReducer } from "./Main/reducer";

export const rootReducer = combineReducers({
  portfolio: portfolioReducer,
  main: mainReducer,
});
