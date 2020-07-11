import React from "react";
import PropTypes from "prop-types";

import { Preview, Description } from "components";
import { PortfolioButtonsContainer } from "containers";

import "./PortfolioItem.scss";

const PortfolioItem = ({ _id, name, description, links, gif }) => {
  return (
    <li className="portfolio__item" data-testid="portfolio-item">
      <div id={_id} data-testid="portfolio-href"></div>
      <p className="portfolio__name">{name}</p>
      <Preview _id={_id} name={name} gif={gif} />
      <Description description={description} />
      <PortfolioButtonsContainer items={links} />
    </li>
  );
};

PortfolioItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  gif: PropTypes.object,
};

export default PortfolioItem;
