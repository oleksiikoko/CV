import {
  SET_CV_PAGE,
  SET_MOTIVATION_PAGE,
  SET_DESKTOP_VERSION,
  SET_TABLET_VERSION,
  SET_MOBILE_VERSION,
} from "./types";

export function setCvPage() {
  return {
    type: SET_CV_PAGE,
    payload: 0,
  };
}

export function setMotivationPage() {
  return {
    type: SET_MOTIVATION_PAGE,
    payload: 1,
  };
}

export function setDesktopVersion() {
  return {
    type: SET_DESKTOP_VERSION,
    payload: { desktop: true, tablet: false, mobile: false },
  };
}

export function setTabletVersion() {
  return {
    type: SET_TABLET_VERSION,
    payload: { desktop: false, tablet: true, mobile: false },
  };
}

export function setMobileVersion() {
  return {
    type: SET_MOBILE_VERSION,
    payload: { desktop: false, tablet: false, mobile: true },
  };
}
