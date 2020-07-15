import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Description.scss";

const Description = ({ description, className }) => {
  return (
    <p
      data-testid="description"
      className={classNames(
        "description",
        className !== undefined && className
      )}
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
};

Description.propTypes = {
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Description;
