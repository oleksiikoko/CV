import {
  SET_MOTIVATION_PAGE,
  SET_CV_PAGE,
  SET_DESKTOP_VERSION,
  SET_TABLET_VERSION,
  SET_MOBILE_VERSION,
  SET_LOW_HEIGHT_VERSION,
} from "./types";

const initialState = {
  page: 0,
  screenVersion: { desktop: false, tablet: false, mobile: false },
  lowHeightVersion: false,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOTIVATION_PAGE:
      return { ...state, page: action.payload };
    case SET_CV_PAGE:
      return { ...state, page: action.payload };
    case SET_DESKTOP_VERSION:
      return { ...state, screenVersion: action.payload };
    case SET_TABLET_VERSION:
      return { ...state, screenVersion: action.payload };
    case SET_MOBILE_VERSION:
      return { ...state, screenVersion: action.payload };
    case SET_LOW_HEIGHT_VERSION:
      return { ...state, lowHeightVersion: action.payload };
    default:
      return state;
  }
};
