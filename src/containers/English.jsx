import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Loader, BlockTitle } from "components";

const English = ({ level, loading }) => {
  return (
    <div className="english df ai-center">
      <BlockTitle inCvBlock text="English" dash />
      {loading ? <Loader /> : <p>{level}</p>}
    </div>
  );
};

English.propTypes = {
  experienceItems: PropTypes.array,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  level: state.english.level,
  loading: state.english.loading,
});

export default connect(mapStateToProps, null)(English);
