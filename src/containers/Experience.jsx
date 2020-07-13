import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Loader, BlockTitle, Experience as ExperienceBase } from "components";

const Experience = ({ experienceItems, loading }) => {
  return (
    <div className="experience" data-testid="experience-container">
      <BlockTitle inCvBlock text="Experience" />
      {loading ? (
        <Loader />
      ) : (
        <ExperienceBase experienceItems={experienceItems} />
      )}
    </div>
  );
};

Experience.propTypes = {
  experienceItems: PropTypes.array,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  experienceItems: state.experience.items,
  loading: state.experience.loading,
});

export default connect(mapStateToProps, null)(Experience);
