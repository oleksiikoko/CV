import { SHOW_ABOUT_LOADER, HIDE_ABOUT_LOADER, FETCH_ABOUT } from "./types";

const initialState = {
  loading: false,
  text: "",
};

export const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ABOUT_LOADER:
      return { ...state, loading: true };
    case HIDE_ABOUT_LOADER:
      return { ...state, loading: false };
    case FETCH_ABOUT:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
