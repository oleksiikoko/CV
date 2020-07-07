import { takeEvery } from "redux-saga/effects";

import { REQUEST_PORTFOLIO } from "./Portfolio/types";
import { REQUEST_ABOUT } from "./About/types";
import { REQUEST_CONTACTS } from "./Contacts/types";
import { REQUEST_EDUCATION } from "./Education/types";
import { REQUEST_ENGLISH } from "./English/types";
import { REQUEST_EXPERIENCE } from "./Experience/types";
import { REQUEST_MOTIVATION } from "./Motivation/types";
import { REQUEST_SKILLS } from "./Skills/types";

import { sagaRequestPortfolio } from "./Portfolio/sagas";
import { sagaRequestAbout } from "./About/sagas";
import { sagaRequestContacts } from "./Contacts/sagas";
import { sagaRequestEducation } from "./Education/sagas";
import { sagaRequestEnglish } from "./English/sagas";
import { sagaRequestExperience } from "./Experience/sagas";
import { sagaRequestMotivation } from "./Motivation/sagas";
import { sagaRequestSkills } from "./Skills/sagas";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_PORTFOLIO, sagaRequestPortfolio);
  yield takeEvery(REQUEST_ABOUT, sagaRequestAbout);
  yield takeEvery(REQUEST_CONTACTS, sagaRequestContacts);
  yield takeEvery(REQUEST_EDUCATION, sagaRequestEducation);
  yield takeEvery(REQUEST_ENGLISH, sagaRequestEnglish);
  yield takeEvery(REQUEST_EXPERIENCE, sagaRequestExperience);
  yield takeEvery(REQUEST_MOTIVATION, sagaRequestMotivation);
  yield takeEvery(REQUEST_SKILLS, sagaRequestSkills);
}
