import React from "react";
import { connect } from "react-redux";

import PortfolioBase from "components/Portfolio";

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

const mapStateToProps = (state) => ({
  curPage: state.main.page,
  portfolioItems: state.portfolio.items,
  loading: state.portfolio.loading,
});

export default connect(mapStateToProps, null)(Portfolio);
