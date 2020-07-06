import React from "react";

import { About as BaseAbout } from "components";

const About = (mobile = false, show = true) => {
  const text = `<p>
    Mostly, I'm looking for a company that appreciates and strongly
    concentrate freethinkers in addition to courageous people, as well as
    the promotion of diverse development of workers specifically on the
    position of "Front-end developer" I want to be engaged in the vast
    majority of the development of "logic" on Js/React, markup(HTML, CSS)
    does not frighten me, assuming that it will occupy no more than 40% of
    tasks related.</p>`;

  return <BaseAbout mobile={mobile} show={show} text={text} />;
};

export default About;
