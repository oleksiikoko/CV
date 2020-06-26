import React from "react";

import { PortfolioButton } from "components";

const PortfolioItem = ({ name, description, links }) => {
  return (
    <>
      <p className="portfolio__name">{name}</p>
      <p className="portfolio__description">{description}</p>
      <div className="button-container df">
        {links.map((item, index) => {
          return (
            <PortfolioButton
              url={item.url}
              color={item.color}
              iconId={item.iconId}
              name={item.name}
              countInLine={links.length}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default PortfolioItem;
