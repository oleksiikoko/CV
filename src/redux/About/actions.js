import { REQUEST_ABOUT, SHOW_ABOUT_LOADER, HIDE_ABOUT_LOADER } from "./types";

export function showAboutLoader() {
  return {
    type: SHOW_ABOUT_LOADER,
  };
}

export function hideAboutLoader() {
  return {
    type: HIDE_ABOUT_LOADER,
  };
}

export const fetchAbout = () => {
  return {
    type: REQUEST_ABOUT,
  };
};
