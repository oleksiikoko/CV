import { put, call } from "redux-saga/effects";

import { FETCH_PORTFOLIO } from "./types";
import { showPortfolioLoader, hidePortfolioLoader } from "./actions";

import { portfolioApi } from "utils/api";

export function* sagaRequestPortfolio() {
  try {
    yield put(showPortfolioLoader());
    const payload = yield call(fetchPortfolio);
    yield put({ type: FETCH_PORTFOLIO, payload });
    yield put(hidePortfolioLoader());
  } catch (e) {
    yield put(hidePortfolioLoader());
  }
}

export async function fetchPortfolio() {
  const response = await portfolioApi.getPortfolio();
  return response.data;
}
