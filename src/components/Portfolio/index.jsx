import React from "react";
import classNames from "classnames";

import { PortfolioItems, Loader } from "components";

import "./Portfolio.scss";
const Portfolio = ({ portfolioItems, loading, mobile, show }) => {
  const portfolioContainerClassNames = classNames("box", {
    "portfolio-container": !mobile,
    "portfolio-container--animation": !show && !mobile,
    "portfolio-container--reverse-animation": show && !mobile,
    "portfolio-container--mobile": mobile,
  });
  const titleClassName = classNames("title", {
    "title--center": !mobile,
    p20: mobile,
  });

  return (
    <div className={portfolioContainerClassNames}>
      <p className={titleClassName}>Portfolio{mobile ? ":" : ""}</p>
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
