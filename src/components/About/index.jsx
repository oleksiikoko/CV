import React from "react";
import classNames from "classnames";

import { BlockTitle, Description, Loader } from "components";

import "./About.scss";

const About = ({ mobile, show, text, loading = true }) => {
  const aboutContainerClassNames = classNames("about-container", {
    box: !mobile,
    "about-container--animation": !show && !mobile,
    "about-container--reverse-animation": show && !mobile,
  });

  return (
    <div className={aboutContainerClassNames}>
      <BlockTitle inCvBlock={mobile} text="About" />
      {loading ? <Loader /> : <Description description={text} />}
    </div>
  );
};

export default About;
