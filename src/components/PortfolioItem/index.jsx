import React from "react";

import { PortfolioButton } from "components";

const PortfolioItem = ({ name, items }) => {
  return (
    <>
      <p className="portfolio__name">{name}</p>
      <p className="portfolio__description">
        I think this be 2 line. One line about project. And second line! Thath`s
        all. No some words be there.<b>afdsf</b>
      </p>
      <div className="button-container df">
        {items.map((item, index) => {
          return (
            <PortfolioButton
              url={item.url}
              color={item.color}
              iconId={item.iconId}
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
