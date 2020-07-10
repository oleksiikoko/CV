import React from "react";

import { Preview, Description } from "components";
import { PortfolioButtonsContainer } from "containers";

import "./PortfolioItem.scss";

const PortfolioItem = ({
  _id,
  name,
  description,
  links,
  // gifPreview,
  // gifPreviewDuration,
  gif,
}) => {
  return (
    <li className="portfolio__item">
      <div id={_id}></div>
      <p className="portfolio__name">{name}</p>
      <Preview _id={_id} name={name} gif={gif} />
      <Description description={description} />
      <PortfolioButtonsContainer items={links} />
    </li>
  );
};

export default PortfolioItem;
