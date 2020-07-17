import React from "react";
import PropTypes from "prop-types";

import { Description } from "components";

import "./Education.scss";

const Education = ({ items }) => {
  return (
    <span data-testid="education">
      {items.map((item, index) => {
        return (
          <div
            className="education-item"
            key={index}
            data-testid="education-item"
          >
            <Description
              description={item.text}
              className="education-item__name"
            />
            {item.description && (
              <Description
                description={item.description}
                className="education-item__description"
              />
            )}
          </div>
        );
      })}
    </span>
  );
};

Education.propTypes = {
  items: PropTypes.array,
};

export default Education;
