import axios from "core/axiosCvApi";

export default {
  getMotivation: () => axios.get("/motivation"),
};
