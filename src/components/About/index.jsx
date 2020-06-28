import React from "react";
import classNames from "classnames";

import "./About.scss";

const About = ({ mobile, show = true }) => {
  const aboutContainerClassNames = classNames("box", "about-container", {
    "about-container--animation": !show,
    "about-container--reverse-animation": show,
  });
  const titleClassName = classNames("title", {
    "title--center": !mobile,
    p20: !mobile,
  });

  return (
    <div className={aboutContainerClassNames}>
      <p className={titleClassName}>About{mobile ? ":" : ""}</p>
      <p className="about-container__text">
        Mostly, I'm looking for a company that appreciates and strongly
        concentrate freethinkers in addition to courageous people, as well as
        the promotion of diverse development of workers specifically on the
        position of "Front-end developer" I want to be engaged in the vast
        majority of the development of "logic" on Js/React, markup(HTML, CSS)
        does not frighten me, assuming that it will occupy no more than 40% of
        tasks related.
      </p>
    </div>
  );
};

export default About;
