import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST_PORTFOLIO } from "./Portfolio/types";

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({ type: FETCH_POSTS, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(showAlert("Something is wrong"));
    yield put(hideLoader());
  }
}

async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  return await response.json();
}

export function* sagaWatcher() {
  yield takeEvery(REQUEST_PORTFOLIO, sagaRequestPortfolio);
}

function* sagaRequestPortfolio() {}
