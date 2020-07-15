import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Loader, Motivation as MotivationBase } from "components";

const Motivation = ({ items, loading }) => {
  return loading ? <Loader /> : <MotivationBase items={items} />;
};

Motivation.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  items: state.motivation.items,
  loading: state.motivation.loading,
});

export default connect(mapStateToProps, null)(Motivation);
