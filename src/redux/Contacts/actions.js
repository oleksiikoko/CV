import {
  REQUEST_CONTACTS,
  SHOW_CONTACTS_LOADER,
  HIDE_CONTACTS_LOADER,
} from "./types";

export function showContactsLoader() {
  return {
    type: SHOW_CONTACTS_LOADER,
  };
}

export function hideContactsLoader() {
  return {
    type: HIDE_CONTACTS_LOADER,
  };
}

export const fetchContacts = () => {
  return {
    type: REQUEST_CONTACTS,
  };
};
