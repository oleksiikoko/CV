import React from "react";
import PropTypes from "prop-types";

import { PortfolioButton } from "components";

const PortfolioButtonsContainer = ({ items }) => {
  return (
    <div data-testid="buttons-container" className="button-container df">
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

PortfolioButtonsContainer.propTypes = {
  items: PropTypes.array.isRequired,
};

export default PortfolioButtonsContainer;
