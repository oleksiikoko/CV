import React from "react";

import className from "classnames";

import "./PortfolioButton.scss";

const PortfolioButton = ({ url, color, icon, name, countInLine }) => {
  return (
    <a
      href={url}
      target="blank"
      className={className("portfolio__button", `portfolio__button--${color}`)}
      style={{ width: (100 / countInLine).toString() + "%" }}
    >
      {icon}
      <p>{name}</p>
    </a>
  );
};

export default PortfolioButton;
