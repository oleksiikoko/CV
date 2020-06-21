import React from "react";

import { PortfolioButton } from "components";

const PortfolioItem = ({ name, items }) => {
  return (
    <>
      <p className="portfolio__name">{name}</p>
      <div className="button-container df">
        {items.map((item, index) => {
          return (
            <PortfolioButton
              url={item.url}
              color={item.color}
              icon={item.icon}
              name={item.name}
              countInLine={items.length}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default PortfolioItem;
