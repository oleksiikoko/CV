import {
  SHOW_MOTIVATION_LOADER,
  HIDE_MOTIVATION_LOADER,
  FETCH_MOTIVATION,
} from "./types";

const initialState = {
  loading: false,
  items: [],
};

export const motivationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MOTIVATION_LOADER:
      return { ...state, loading: true };
    case HIDE_MOTIVATION_LOADER:
      return { ...state, loading: false };
    case FETCH_MOTIVATION:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
