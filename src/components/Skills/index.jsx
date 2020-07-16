import React from "react";
import PropTypes from "prop-types";

import { Description } from "components";

import "./Skills.scss";

const Skills = ({ skills }) => {
  return (
    <ul data-testid="skills">
      {skills.map((item, index) => {
        return (
          <li key={index}>
            <Description description={item.text} />
          </li>
        );
      })}
    </ul>
  );
};

Skills.propTypes = {
  skills: PropTypes.array,
};

export default Skills;
