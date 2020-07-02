import { takeEvery, put, call } from "redux-saga/effects";

import { REQUEST_PORTFOLIO, FETCH_PORTFOLIO } from "./Portfolio/types";
import { showPortfolioLoader, hidePortfolioLoader } from "./Portfolio/actions";

import { portfolioApi } from "utils/api";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_PORTFOLIO, sagaRequestPortfolio);
}

function* sagaRequestPortfolio() {
  try {
    yield put(showPortfolioLoader());
    const payload = yield call(fetchPortfolio);
    yield put({ type: FETCH_PORTFOLIO, payload });
    yield put(hidePortfolioLoader());
  } catch (e) {
    // yield put(showAlert("Something is wrong"));
    yield put(hidePortfolioLoader());
  }
}

async function fetchPortfolio() {
  const response = await portfolioApi.getPortfolio();

  console.log(response);

  return response.data;
}
