import axios from "core/axiosCvApi";

export default {
  getSkills: () => axios.get("/skills"),
};
