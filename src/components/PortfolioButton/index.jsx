import React from "react";
import className from "classnames";

import getIcon from "utils/getIcon";

import "./PortfolioButton.scss";

const PortfolioButton = ({ url, color, iconId, name, countInLine }) => {
  let Icon = getIcon(iconId);
  // console.log(iconId);
  return (
    <a
      href={url}
      target="blank"
      className={className("portfolio__button", `portfolio__button--${color}`)}
      style={{ width: (100 / countInLine).toString() + "%" }}
    >
      <Icon />
      <p>{name}</p>
    </a>
  );
};

export default PortfolioButton;
