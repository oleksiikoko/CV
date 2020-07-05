import React from "react";
import PropTypes from "prop-types";

import "./Description.scss";

const Description = ({ description }) => {
  return (
    <p
      data-testid="description"
      className="description"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
};

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
