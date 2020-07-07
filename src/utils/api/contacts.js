import axios from "core/axiosCvApi";

export default {
  getContacts: () => axios.get("/contacts"),
};
