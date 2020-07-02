import React from "react";

import { PortfolioButton } from "components";

const PortfolioButtonsContainer = ({ items }) => {
  return (
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
  );
};

export default PortfolioButtonsContainer;
