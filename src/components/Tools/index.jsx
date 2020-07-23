import React from "react";

import { getIcon } from "utils";
import { sendMailApi } from "utils/api";

import { ToolItem } from "components";

import "./Tools.scss";

const Tools = () => {
  const DownloadPdfSvg = getIcon("downloadPdf");
  const SentMailSvg = getIcon("sentMail");

  const downloadPdf = () => {
    let link = document.getElementById("download-pdf");
    link.dispatchEvent(new MouseEvent("click"));
  };

  const onSendEmail = () => {
    let email = prompt("Enter your mail : ", "example@mail.com");
    sendMailApi.sendMail(email);
  };

  return (
    <div className="tools-container" data-testid="tools">
      <ToolItem
        icon={DownloadPdfSvg}
        text="Download CV"
        onClick={downloadPdf}
      />
      <ToolItem
        icon={SentMailSvg}
        text="Send CV to mail"
        onClick={onSendEmail}
      />

      <a
        href="https://kovalchuk-cv.herokuapp.com/download-pdf"
        id="download-pdf"
        download="download-pdf"
        style={{ display: "none" }}
      >
        download-pdf
      </a>
    </div>
  );
};

Tools.propTypes = {};

export default Tools;
