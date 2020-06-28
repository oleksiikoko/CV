import { SET_CV_PAGE, SET_MOTIVATION_PAGE } from "./types";

export function setCvPage(post) {
  return {
    type: SET_CV_PAGE,
    payload: 0,
  };
}

export function setMotivationPage(post) {
  return {
    type: SET_MOTIVATION_PAGE,
    payload: 1,
  };
}
