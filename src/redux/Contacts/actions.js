import { REQUEST_ABOUT, SHOW_ABOUT_LOADER, HIDE_ABOUT_LOADER } from "./types";

export function showContactsLoader() {
  return {
    type: SHOW_ABOUT_LOADER,
  };
}

export function hideContactsLoader() {
  return {
    type: HIDE_ABOUT_LOADER,
  };
}

export const fetchContacts = () => {
  return {
    type: REQUEST_ABOUT,
  };
};
