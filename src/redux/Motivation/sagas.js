import { put, call } from "redux-saga/effects";

import { FETCH_MOTIVATION } from "./types";
import { showMotivationLoader, hideMotivationLoader } from "./actions";

import { motivationApi } from "utils/api";

export function* sagaRequestMotivation() {
  try {
    yield put(showMotivationLoader());
    const payload = yield call(fetchMotivation);
    yield put({ type: FETCH_MOTIVATION, payload });
    yield put(hideMotivationLoader());
  } catch (e) {
    yield put(hideMotivationLoader());
  }
}

export async function fetchMotivation() {
  const response = await motivationApi.getMotivation();
  return response.data;
}
