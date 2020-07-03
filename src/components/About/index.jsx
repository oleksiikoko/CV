import React from "react";
import classNames from "classnames";

import { BlockTitle, Description } from "components";

import "./About.scss";

const About = ({ mobile, show }) => {
  const aboutContainerClassNames = classNames("about-container", {
    box: !mobile,
    "about-container--animation": !show && !mobile,
    "about-container--reverse-animation": show && !mobile,
  });

  return (
    <div className={aboutContainerClassNames}>
      <BlockTitle inCvBlock={mobile} text="About" />
      <Description
        description={`<p>
        Mostly, I'm looking for a company that appreciates and strongly
        concentrate freethinkers in addition to courageous people, as well as
        the promotion of diverse development of workers specifically on the
        position of "Front-end developer" I want to be engaged in the vast
        majority of the development of "logic" on Js/React, markup(HTML, CSS)
        does not frighten me, assuming that it will occupy no more than 40% of
        tasks related.</p>`}
      />
    </div>
  );
};

export default About;
