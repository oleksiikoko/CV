import React, { useState, Fragment } from "react";
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
            <Fragment key={index}>
              <span
                className={classNames(
                  curItem === index && "motivation__language__active-btn"
                )}
                onClick={() => {
                  setCurItem(index);
                }}
              >
                {index === 0 && <p>(recommended) </p>}
                {item.language}
              </span>
              {index !== items.length - 1 && <>&bull;</>}
            </Fragment>
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
