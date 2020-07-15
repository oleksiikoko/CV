import React from "react";

import { getIcon } from "utils";

import { ToolItem } from "components";

import "./Tools.scss";

const Tools = () => {
  const DownloadPdfSvg = getIcon("downloadPdf");
  const SentMailSvg = getIcon("sentMail");

  const downloadPdf = () => {
    let link = document.getElementById("download-pdf");
    link.dispatchEvent(new MouseEvent("click"));
  };

  return (
    <div className="tools-container">
      <ToolItem
        icon={DownloadPdfSvg}
        text="Download CV"
        onClick={downloadPdf}
      />
      <ToolItem icon={SentMailSvg} text="Send CV to mail" />

      <a
        href="http://192.168.1.12:3002/download-pdf"
        id="download-pdf"
        download="download-pdf"
        style={{ display: "none" }}
      >
        download-btn
      </a>
    </div>
  );
};
export default Tools;
