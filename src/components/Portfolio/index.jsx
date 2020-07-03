import React from "react";
import classNames from "classnames";

import { PortfolioItems, BlockTitle, Loader } from "components";

import "./Portfolio.scss";

const Portfolio = ({ portfolioItems, loading, mobile, show }) => {
  const portfolioContainerClassNames = classNames("box", {
    "portfolio-container": !mobile,
    "portfolio-container--animation": !show && !mobile,
    "portfolio-container--reverse-animation": show && !mobile,
    "portfolio-container--mobile": mobile,
  });

  return (
    <div className={portfolioContainerClassNames}>
      <BlockTitle inCvBlock={mobile} text="Portfolio" />
      <div className="portfolio">
        {loading && portfolioItems.length === 0 ? (
          <Loader />
        ) : (
          <PortfolioItems portfolioItems={portfolioItems} />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
