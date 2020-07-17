import React from "react";
import PropTypes from "prop-types";

import {
  About,
  Skills,
  Portfolio,
  Experience,
  Education,
  English,
  Contacts,
  Tools,
} from "containers";

const CvContent = ({ screenVersion }) => {
  return (
    <span data-testid="cv-content">
      {screenVersion.mobile && <About />}
      <Skills />
      {!screenVersion.desktop && <Portfolio mobile={true} />}
      <Experience />
      <Education />
      <English />
      {screenVersion.mobile && (
        <>
          <Contacts mobile={true} />
          <Tools />
        </>
      )}
    </span>
  );
};

CvContent.propTypes = {
  screenVersion: PropTypes.object,
};

export default CvContent;
