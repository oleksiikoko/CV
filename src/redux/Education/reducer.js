import {
  SHOW_EDUCATION_LOADER,
  HIDE_EDUCATION_LOADER,
  FETCH_EDUCATION,
} from "./types";

const initialState = {
  loading: false,
  items: [],
};

export const educationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_EDUCATION_LOADER:
      return { ...state, loading: true };
    case HIDE_EDUCATION_LOADER:
      return { ...state, loading: false };
    case FETCH_EDUCATION:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
