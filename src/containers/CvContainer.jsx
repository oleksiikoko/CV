import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { CvContent } from "components";
import { CvBottomPageSwitcher } from "containers";

const CvContainer = ({ curPage, screenVersion }) => {
  return (
    <div className="cv-container box">
      <div className="cv-header">
        <p className="cv-header__name">Oleksii Kovalchuk</p>
        <p className="cv-header__position">Frontend Developer</p>
      </div>
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
