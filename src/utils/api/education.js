import axios from "core/axiosCvApi";

export default {
  getEducation: () => axios.get("/education"),
};
