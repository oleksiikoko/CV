import React from "react";
import PropTypes from "prop-types";

import { ExperienceItem } from "components";

import "./Experience.scss";

const Experience = ({ experienceItems }) => {
  return experienceItems.map((item, index) => {
    return <ExperienceItem item={item} key={index} />;
  });
};

Experience.propTypes = {
  experienceItems: PropTypes.array,
};

export default Experience;
