import {
  SHOW_PORTFOLIO_LOADER,
  HIDE_PORTFOLIO_LOADER,
  FETCH_PORTFOLIO,
} from "./types";

const initialState = {
  loading: false,
  items: [],
};

export const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PORTFOLIO_LOADER:
      return { ...state, loading: true };
    case HIDE_PORTFOLIO_LOADER:
      return { ...state, loading: false };
    case FETCH_PORTFOLIO:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
