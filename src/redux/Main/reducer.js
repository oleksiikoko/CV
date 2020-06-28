import { SET_MOTIVATION_PAGE, SET_CV_PAGE } from "./types";

const initialState = {
  page: 0,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOTIVATION_PAGE:
      return { ...state, page: action.payload };
    case SET_CV_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
