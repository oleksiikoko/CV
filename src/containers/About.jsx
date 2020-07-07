import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { About as AboutBase } from "components";

const About = ({ screenVersion, curPage, aboutText, loading }) => {
  return (
    <AboutBase
      mobile={screenVersion.mobile}
      show={curPage === 0}
      text={aboutText}
      loading={loading}
    />
  );
};

About.propTypes = {
  screenVersion: PropTypes.object.isRequired,
  curPage: PropTypes.number.isRequired,
  aboutText: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  screenVersion: state.main.screenVersion,
  curPage: state.main.page,
  aboutText: state.about.text,
  loading: state.about.loading,
});

export default connect(mapStateToProps, null)(About);
