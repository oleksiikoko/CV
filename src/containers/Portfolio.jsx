import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Portfolio as PortfolioBase } from "components";

const Portfolio = ({ mobile, curPage, portfolioItems, loading }) => {
  return (
    <PortfolioBase
      portfolioItems={portfolioItems}
      loading={loading}
      mobile={mobile}
      show={curPage === 0}
    />
  );
};

Portfolio.propTypes = {
  mobile: PropTypes.bool,
  curPage: PropTypes.number.isRequired,
  portfolioItems: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  curPage: state.main.page,
  portfolioItems: state.portfolio.items,
  loading: state.portfolio.loading,
});

export default connect(mapStateToProps, null)(Portfolio);
