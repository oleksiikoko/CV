import { put, call } from "redux-saga/effects";

import { FETCH_CONTACTS } from "./types";
import { showContactsLoader, hideContactsLoader } from "./actions";

import { contactsApi } from "utils/api";

export function* sagaRequestContacts() {
  try {
    yield put(showContactsLoader());
    const payload = yield call(fetchContacts);
    yield put({ type: FETCH_CONTACTS, payload });
    yield put(hideContactsLoader());
  } catch (e) {
    yield put(hideContactsLoader());
  }
}

export async function fetchContacts() {
  const response = await contactsApi.getContacts();
  return response.data;
}
