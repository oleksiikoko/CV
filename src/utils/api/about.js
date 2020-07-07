import axios from "core/axiosCvApi";

export default {
  getAbout: () => axios.get("/about"),
};
