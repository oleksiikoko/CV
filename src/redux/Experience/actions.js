import {
  REQUEST_EXPERIENCE,
  SHOW_EXPERIENCE_LOADER,
  HIDE_EXPERIENCE_LOADER,
} from "./types";

export function showExperienceLoader() {
  return {
    type: SHOW_EXPERIENCE_LOADER,
  };
}

export function hideExperienceLoader() {
  return {
    type: HIDE_EXPERIENCE_LOADER,
  };
}

export const fetchExperience = () => {
  return {
    type: REQUEST_EXPERIENCE,
  };
};
