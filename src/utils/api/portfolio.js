import axios from "core/axiosCvApi";

export default {
  getPortfolio: () => axios.get("/portfolio"),
};
