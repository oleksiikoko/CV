import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Loader, Education as EducationBase, BlockTitle } from "components";

const Education = ({ items, loading }) => {
  return (
    <div className="education" data-testid="education-container">
      <BlockTitle inCvBlock text="Education" />
      {loading ? <Loader /> : <EducationBase items={items} />}
    </div>
  );
};

Education.propTypes = {
  experienceItems: PropTypes.array,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  items: state.education.items,
  loading: state.education.loading,
});

export default connect(mapStateToProps, null)(Education);
