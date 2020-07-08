import React from "react";

import { getIcon } from "utils";

import { ToolItem } from "components";

import "./Tools.scss";

const Tools = () => {
  const CvApiSvg = getIcon("api");
  const DownloadPdfSvg = getIcon("downloadPdf");
  const SentMailSvg = getIcon("sentMail");
  return (
    <div className="tools-container flex-raw-container jc-sb">
      <ToolItem
        className="tool--left-slide--api"
        icon={CvApiSvg}
        text="CV API"
      />
      <ToolItem
        className="tool--left-slide--download"
        icon={DownloadPdfSvg}
        text="Download CV"
      />
      <ToolItem
        className="tool--hidden tool--left-slide--send"
        icon={SentMailSvg}
        text="Send CV to mail"
      />
    </div>
  );
};
export default Tools;
