import React from "react";
import PropTypes from "prop-types";
import className from "classnames";

import getIcon from "utils/getIcon";

import "./PortfolioButton.scss";

const PortfolioButton = ({ url, color, iconId, name, countInLine }) => {
  const Icon = getIcon(iconId);

  return (
    <a
      data-testid="button-link"
      href={url}
      target="blank"
      className={className("portfolio__button", `portfolio__button--${color}`)}
      style={{ width: (100 / countInLine).toString() + "%" }}
    >
      <Icon data-testid="button-icon" />
      <p data-testid="button-text">{name}</p>
    </a>
  );
};

PortfolioButton.propTypes = {
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  iconId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  countInLine: PropTypes.number.isRequired,
};

export default PortfolioButton;
