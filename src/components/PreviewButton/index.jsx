import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import getIcon from "utils/getIcon";

import "./PreviewButton.scss";

const PreviewButton = ({ _id, active, onClick, className }) => {
  const Icon = getIcon("downArrow");

  return (
    <a
      data-testid="preview-button-container"
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
      <p data-testid="preview-button-text" className="preview-button__name">
        Preview
      </p>
      <Icon data-testid="preview-button-svg" />
    </a>
  );
};

PreviewButton.propTypes = {
  _id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default PreviewButton;
