import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Loader, Skills as SkillsBase, BlockTitle } from "components";

const Skills = ({ skills, loading }) => {
  return (
    <div className="skills" data-testid="skills-container">
      <BlockTitle inCvBlock text="Skills" />
      {loading ? <Loader /> : <SkillsBase skills={skills} />}
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.array,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  skills: state.skills.items,
  loading: state.skills.loading,
});

export default connect(mapStateToProps, null)(Skills);
