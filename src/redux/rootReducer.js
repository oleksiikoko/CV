import { combineReducers } from "redux";
import { portfolioReducer } from "./Portfolio/reducer";
import { aboutReducer } from "./About/reducer";
import { contactsReducer } from "./Contacts/reducer";
import { experienceReducer } from "./Experience/reducer";
import { motivationReducer } from "./Motivation/reducer";
import { skillsReducer } from "./Skills/reducer";
import { englishReducer } from "./English/reducer";
import { mainReducer } from "./Main/reducer";

export const rootReducer = combineReducers({
  portfolio: portfolioReducer,
  main: mainReducer,
  about: aboutReducer,
  contacts: contactsReducer,
  english: englishReducer,
  experiece: experienceReducer,
  motivation: motivationReducer,
  skills: skillsReducer,
});
