import { put, call } from "redux-saga/effects";

import { FETCH_SKILLS } from "./types";
import { showSkillsLoader, hideSkillsLoader } from "./actions";

import { skillsApi } from "utils/api";

export function* sagaRequestSkills() {
  try {
    yield put(showSkillsLoader());
    const payload = yield call(fetchSkills);
    yield put({ type: FETCH_SKILLS, payload });
    yield put(hideSkillsLoader());
  } catch (e) {
    yield put(hideSkillsLoader());
  }
}

export async function fetchSkills() {
  const response = await skillsApi.getSkills();
  console.log(response.data);
  return response.data;
}
