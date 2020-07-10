import React from "react";

import { PortfolioItem } from "components";

const PortfolioItems = ({ portfolioItems }) => {
  return (
    <ul className="portfolio__ul">
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

export default PortfolioItems;
