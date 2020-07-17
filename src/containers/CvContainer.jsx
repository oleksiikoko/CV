import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Header } from "components";
import { CvBottomPageSwitcher, CvContent } from "containers";

const CvContainer = ({ curPage, screenVersion }) => {
  return (
    <div className="cv-container box" data-testid="cv-container">
      <Header />
      <CvContent screenVersion={screenVersion} curPage={curPage} />
      <CvBottomPageSwitcher />
    </div>
  );
};

CvContainer.propTypes = {
  curPage: PropTypes.number,
  screenVersion: PropTypes.object,
};

const mapStateToProps = (state) => ({
  curPage: state.main.page,
  screenVersion: state.main.screenVersion,
});

export default connect(mapStateToProps, null)(CvContainer);
