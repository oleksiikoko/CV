import {
  SHOW_ENGLISH_LOADER,
  HIDE_ENGLISH_LOADER,
  FETCH_ENGLISH,
} from "./types";

const initialState = {
  loading: false,
  level: null,
};

export const englishReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ENGLISH_LOADER:
      return { ...state, loading: true };
    case HIDE_ENGLISH_LOADER:
      return { ...state, loading: false };
    case FETCH_ENGLISH:
      return { ...state, level: action.payload };
    default:
      return state;
  }
};
