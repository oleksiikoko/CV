import { put, call } from "redux-saga/effects";

import { FETCH_EDUCATION } from "./types";
import { showEducationLoader, hideEducationLoader } from "./actions";

import { educationApi } from "utils/api";

export function* sagaRequestEducation() {
  try {
    yield put(showEducationLoader());
    const payload = yield call(fetchEducation);
    yield put({ type: FETCH_EDUCATION, payload });
    yield put(hideEducationLoader());
  } catch (e) {
    yield put(hideEducationLoader());
  }
}

export async function fetchEducation() {
  const response = await educationApi.getEducation();
  return response.data;
}
