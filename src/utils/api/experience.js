import axios from "core/axiosCvApi";

export default {
  getExperience: () => axios.get("/experience"),
};
