import React from "react";
import PropTypes from "prop-types";

import {
  About,
  Skills,
  Portfolio,
  Experience,
  Education,
  English,
  // Contacts,
} from "containers";

const CvContent = ({ screenVersion }) => {
  return (
    <div className="cv-content">
      {screenVersion.mobile && <About />}
      <Skills />
      {!screenVersion.desktop && <Portfolio mobile={true} />}
      <Experience />
      <Education />
      <English />
      {/* {screenVersion.mobile && <Contacts mobile={true} />} */}
    </div>
  );
};

CvContent.propTypes = {
  screenVersion: PropTypes.object,
};

export default CvContent;
