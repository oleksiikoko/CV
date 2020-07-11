import React from "react";
import PropTypes from "prop-types";
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
    <div className={portfolioContainerClassNames} data-testid="portfolio">
      <BlockTitle inCvBlock={mobile} text="Portfolio" />
      <div className="portfolio" data-testid="portfoio-container">
        {loading || portfolioItems.length === 0 ? (
          <Loader />
        ) : (
          <PortfolioItems portfolioItems={portfolioItems} />
        )}
      </div>
    </div>
  );
};

Portfolio.propTypes = {
  portfolioItems: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  mobile: PropTypes.bool,
  show: PropTypes.bool,
};

export default Portfolio;
