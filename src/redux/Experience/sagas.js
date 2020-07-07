import { put, call } from "redux-saga/effects";

import { FETCH_EXPERIENCE } from "./types";
import { showExperienceLoader, hideExperienceLoader } from "./actions";

import { experienceApi } from "utils/api";

export function* sagaRequestExperience() {
  try {
    yield put(showExperienceLoader());
    const payload = yield call(fetchExperience);
    yield put({ type: FETCH_EXPERIENCE, payload });
    yield put(hideExperienceLoader());
  } catch (e) {
    yield put(hideExperienceLoader());
  }
}

export async function fetchExperience() {
  const response = await experienceApi.getExperience();
  return response.data;
}
