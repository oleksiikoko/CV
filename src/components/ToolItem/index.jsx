import React from "react";
import PropTypes from "prop-types";

import "./ToolItem.scss";

const ToolItem = ({ icon, text, onClick }) => {
  const Icon = icon;
  return (
    <div
      data-testid="tool-item"
      className={`tool box flex-raw-container jc-center ai-center`}
      onClick={onClick}
    >
      <Icon />
      <p>{text}</p>
    </div>
  );
};

ToolItem.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default ToolItem;
