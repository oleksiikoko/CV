import {
  REQUEST_SKILLS,
  SHOW_SKILLS_LOADER,
  HIDE_SKILLS_LOADER,
} from "./types";

export function showSkillsLoader() {
  return {
    type: SHOW_SKILLS_LOADER,
  };
}

export function hideSkillsLoader() {
  return {
    type: HIDE_SKILLS_LOADER,
  };
}

export const fetchSkills = () => {
  return {
    type: REQUEST_SKILLS,
  };
};
