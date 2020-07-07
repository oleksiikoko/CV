import { put, call } from "redux-saga/effects";

import { FETCH_ENGLISH } from "./types";
import { showEnglishLoader, hideEnglishLoader } from "./actions";

import { englishApi } from "utils/api";

export function* sagaRequestEnglish() {
  try {
    yield put(showEnglishLoader());
    const payload = yield call(fetchEnglish);
    yield put({ type: FETCH_ENGLISH, payload });
    yield put(hideEnglishLoader());
  } catch (e) {
    yield put(hideEnglishLoader());
  }
}

export async function fetchEnglish() {
  const response = await englishApi.getEnglish();
  return response.data;
}
