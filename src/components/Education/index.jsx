import React from "react";
import PropTypes from "prop-types";

const Education = ({ items }) => {
  return items.map((item, index) => {
    return (
      <div className="education-item" key="index">
        <p>{item.text}</p>
        {item.description && (
          <p className="education-description">{item.description}</p>
        )}
      </div>
    );
  });
};

Education.propTypes = {
  items: PropTypes.array,
};

export default Education;
