import {
  REQUEST_EDUCATION,
  SHOW_EDUCATION_LOADER,
  HIDE_EDUCATION_LOADER,
} from "./types";

export function showEducationLoader() {
  return {
    type: SHOW_EDUCATION_LOADER,
  };
}

export function hideEducationLoader() {
  return {
    type: HIDE_EDUCATION_LOADER,
  };
}

export const fetchEducation = () => {
  return {
    type: REQUEST_EDUCATION,
  };
};
