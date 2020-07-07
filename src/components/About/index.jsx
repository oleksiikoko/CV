import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { BlockTitle, Description, Loader } from "components";

import "./About.scss";

const About = ({ mobile, show, text, loading }) => {
  const aboutContainerClassNames = classNames("about-container", {
    box: !mobile,
    "about-container--animation": !show && !mobile,
    "about-container--reverse-animation": show && !mobile,
  });

  return (
    <div className={aboutContainerClassNames} data-testid="about-container">
      <BlockTitle inCvBlock={mobile} text="About" />
      {loading ? <Loader /> : <Description description={text} />}
    </div>
  );
};

About.propTypes = {
  mobile: PropTypes.bool.isRequired,
  show: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default About;
