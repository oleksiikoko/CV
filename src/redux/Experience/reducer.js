import {
  SHOW_EXPERIENCE_LOADER,
  HIDE_EXPERIENCE_LOADER,
  FETCH_EXPERIENCE,
} from "./types";

const initialState = {
  loading: false,
  items: [],
};

export const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_EXPERIENCE_LOADER:
      return { ...state, loading: true };
    case HIDE_EXPERIENCE_LOADER:
      return { ...state, loading: false };
    case FETCH_EXPERIENCE:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
