import React from "react";
import classNames from "classnames";

const BlockTitle = ({ inCvBlock, text }) => {
  const titleClassName = classNames("title", "p20", "pb5", {
    "title--center": !inCvBlock,
  });

  return (
    <p className={titleClassName}>
      {text}
      {inCvBlock ? ":" : ""}
    </p>
  );
};

export default BlockTitle;
