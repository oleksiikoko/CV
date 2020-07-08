import React from "react";

import "./ToolItem.scss";

const ToolItem = ({ className, icon, text }) => {
  const Icon = icon;
  return (
    <div
      className={`tool box flex-raw-container jc-center ai-center ${className}`}
    >
      <Icon />
      <p>{text}</p>
    </div>
  );
};

export default ToolItem;
