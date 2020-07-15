import axios from "core/axiosCvApi";

export default {
  sendMail: (recipient) =>
    axios.post("/send-to-mail", { recipient: recipient }),
};
