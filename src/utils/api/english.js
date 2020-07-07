import axios from "core/axiosCvApi";

export default {
  getEnglish: () => axios.get("/english"),
};
