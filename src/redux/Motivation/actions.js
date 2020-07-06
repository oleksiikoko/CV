import {
  REQUEST_MOTIVATION,
  SHOW_MOTIVATION_LOADER,
  HIDE_MOTIVATION_LOADER,
} from "./types";

export function showMotivationLoader() {
  return {
    type: SHOW_MOTIVATION_LOADER,
  };
}

export function hideMotivationLoader() {
  return {
    type: HIDE_MOTIVATION_LOADER,
  };
}

export const fetchMotivation = () => {
  return {
    type: REQUEST_MOTIVATION,
  };
};
