import React from "react";
import classNames from "classnames";

import getIcon from "utils/getIcon";

import "./PreviewButton.scss";

const PreviewButton = ({ _id, active, onClick, className }) => {
  const Icon = getIcon("downArrow");

  return (
    <a
      href={`#${_id}`}
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
    </a>
  );
};

export default PreviewButton;
