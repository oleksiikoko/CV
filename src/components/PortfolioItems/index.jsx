import React from "react";
import PropTypes from "prop-types";

import { PortfolioItem } from "components";

const PortfolioItems = ({ portfolioItems }) => {
  return (
    <ul className="portfolio__ul" data-testid="portfolio-items">
      {portfolioItems.map((item, index) => {
        return (
          <PortfolioItem
            key={index}
            _id={item._id}
            name={item.projectName}
            description={item.description}
            links={item.links}
            gif={item.gifPreview}
          />
        );
      })}
    </ul>
  );
};

PortfolioItems.propTypes = {
  portfolioItems: PropTypes.array.isRequired,
};

export default PortfolioItems;
