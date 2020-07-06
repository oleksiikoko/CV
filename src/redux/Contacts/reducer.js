import {
  SHOW_CONTACTS_LOADER,
  HIDE_CONTACTS_LOADER,
  FETCH_CONTACTS,
} from "./types";

const initialState = {
  loading: false,
  items: [],
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CONTACTS_LOADER:
      return { ...state, loading: true };
    case HIDE_CONTACTS_LOADER:
      return { ...state, loading: false };
    case FETCH_CONTACTS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
