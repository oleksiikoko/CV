import { SHOW_SKILLS_LOADER, HIDE_SKILLS_LOADER, FETCH_SKILLS } from "./types";

const initialState = {
  loading: false,
  items: [],
};

export const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SKILLS_LOADER:
      return { ...state, loading: true };
    case HIDE_SKILLS_LOADER:
      return { ...state, loading: false };
    case FETCH_SKILLS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
