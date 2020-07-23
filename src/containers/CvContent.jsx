import React from "react";
import PropTypes from "prop-types";

import { CvContent as CvContentBase } from "components";
import { Motivation } from "containers";

const CvContent = ({ curPage, screenVersion }) => {
  return (
    <div className="cv-content-container" id="cv-content-container">
      {curPage === 0 && <CvContentBase screenVersion={screenVersion} />}
      {curPage === 1 && <Motivation />}
    </div>
  );
};

CvContent.propTypes = {
  curPage: PropTypes.number,
  screenVersion: PropTypes.object,
};

export default CvContent;
