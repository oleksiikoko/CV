import React from "react";
import { connect } from "react-redux";

import PortfolioBase from "components/Portfolio";

const Portfolio = ({ mobile, curPage }) => {
  return <PortfolioBase mobile={mobile} show={curPage === 0} />;
};

const mapStateToProps = (state) => ({
  curPage: state.main.page,
});

export default connect(mapStateToProps, null)(Portfolio);
