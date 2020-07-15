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
    <>
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
    </>
  );
};

CvContent.propTypes = {
  screenVersion: PropTypes.object,
};

export default CvContent;
