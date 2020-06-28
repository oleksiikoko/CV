import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { PortfolioItem } from "components";

import "./Portfolio.scss";

const Portfolio = ({ mobile, show = true }) => {
  const porfolioItems = useSelector((state) => state.portfolio.items);

  const portfolioContainerClassNames = classNames("box", {
    "portfolio-container": !mobile,
    "portfolio-container--animation": !show,
    "portfolio-container--reverse-animation": show,
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
      </div>
    </div>
  );
};

export default Portfolio;
