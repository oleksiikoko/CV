import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Description } from "components";

import "./Motivation.scss";

const Motivation = ({ items }) => {
  const [curItem, setCurItem] = useState(0);

  return (
    <div className="motivation">
      <div className="motivation__language">
        {items.map((item, index) => {
          return (
            <span key={index}>
              <span
                className={classNames(
                  curItem === index && "motivation__language__active-btn"
                )}
                onClick={() => {
                  setCurItem(index);
                }}
              >
                {item.language}
                {index === 0 && <p>(recomended)</p>}
              </span>
              {index !== items.length - 1 && <>&bull;</>}
            </span>
          );
        })}
      </div>
      <div className="motivation__description">
        <Description description={items[curItem].text} />
      </div>
    </div>
  );
};

Motivation.propTypes = {
  items: PropTypes.array,
};

export default Motivation;
