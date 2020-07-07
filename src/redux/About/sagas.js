import { put, call } from "redux-saga/effects";

import { FETCH_ABOUT } from "./types";
import { showAboutLoader, hideAboutLoader } from "./actions";

import { aboutApi } from "utils/api";

export function* sagaRequestAbout() {
  try {
    yield put(showAboutLoader());
    const payload = yield call(fetchAbout);
    yield put({ type: FETCH_ABOUT, payload });
    yield put(hideAboutLoader());
  } catch (e) {
    yield put(hideAboutLoader());
  }
}

export async function fetchAbout() {
  const response = await aboutApi.getAbout();
  return response.data;
}
