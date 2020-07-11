import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const BlockTitle = ({ inCvBlock, text, dash }) => {
  const titleClassName = classNames("title", "p20", "pb5", {
    "title--center": !inCvBlock,
  });

  return (
    <p className={titleClassName} data-testid="block-title">
      {text}
      {inCvBlock ? (dash ? " - " : ":") : ""}
    </p>
  );
};

BlockTitle.propTypes = {
  inCvBlock: PropTypes.bool,
  text: PropTypes.string.isRequired,
  dash: PropTypes.bool,
};

export default BlockTitle;
