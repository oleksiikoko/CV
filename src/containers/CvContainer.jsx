import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { CvContent, Header } from "components";
import { CvBottomPageSwitcher } from "containers";

const CvContainer = ({ curPage, screenVersion }) => {
  return (
    <div className="cv-container box">
      <Header />
      <CvContent screenVersion={screenVersion} />
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
