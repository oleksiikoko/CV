import React from "react";

import { PortfolioItem } from "components";

const PortfolioItems = ({ portfolioItems }) => {
  return (
    <ul>
      {portfolioItems.map((item, index) => (
        <PortfolioItem
          key={index}
          name={item.projectName}
          description={item.description}
          links={item.links}
        />
      ))}
    </ul>
  );
};

export default PortfolioItems;
