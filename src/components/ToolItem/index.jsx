import React from "react";

import "./ToolItem.scss";

const ToolItem = ({ icon, text, onClick }) => {
  const Icon = icon;
  return (
    <div
      className={`tool box flex-raw-container jc-center ai-center`}
      onClick={onClick}
    >
      <Icon />
      <p>{text}</p>
    </div>
  );
};

export default ToolItem;
