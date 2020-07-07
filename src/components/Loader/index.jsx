import React from "react";

import "./Loader.scss";

const Loader = () => {
  return (
    <div className="lds-roller" data-testid="loader">
      <div role="tab"></div>
      <div role="tab"></div>
      <div role="tab"></div>
      <div role="tab"></div>
      <div role="tab"></div>
      <div role="tab"></div>
      <div role="tab"></div>
      <div role="tab"></div>
    </div>
  );
};

export default Loader;
