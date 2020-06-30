import React from "react";
import classNames from "classnames";

import { PortfolioItem } from "components";

import "./Portfolio.scss";

const Portfolio = ({ porfolioItems, loading, mobile, show }) => {
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
        {loading && porfolioItems.length !== 0 ? (
          <p>Loading</p>
        ) : (
          <ul>
            {porfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
                name={item.projectName}
                description={item.description}
                links={item.links}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
