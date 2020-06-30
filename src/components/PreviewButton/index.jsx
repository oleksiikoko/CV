import React from "react";
import classNames from "classnames";

import getIcon from "utils/getIcon";

import "./PreviewButton.scss";

const PreviewButton = ({ active, onClick, className }) => {
  const Icon = getIcon("downArrow");

  return (
    <div
      className={classNames(
        "df",
        "preview-button",
        {
          "preview-button--active": active,
        },
        className
      )}
      onClick={onClick}
    >
      <p className="preview-button__name">Preview</p>
      <Icon />
    </div>
  );
};

export default PreviewButton;
