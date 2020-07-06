import {
  REQUEST_ENGLISH,
  SHOW_ENGLISH_LOADER,
  HIDE_ENGLISH_LOADER,
} from "./types";

export function showEnglishLoader() {
  return {
    type: SHOW_ENGLISH_LOADER,
  };
}

export function hideEnglishLoader() {
  return {
    type: HIDE_ENGLISH_LOADER,
  };
}

export const fetchEnglish = () => {
  return {
    type: REQUEST_ENGLISH,
  };
};
