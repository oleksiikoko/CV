import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./BottomPageSwitcher.scss";

const BottomPageSwitcher = ({ states, onTabChange, curTab }) => {
  const [curTabState, setCurTabState] = useState(curTab);

  const clickHandler = (changeTo) => {
    if (changeTo !== curTabState) {
      setCurTabState(changeTo);
      onTabChange(changeTo);
    }
  };

  return (
    <div className="bottom-page-switcher" data-testid="bottom-page-switcher">
      {states.map((item, index) => {
        return (
          <div
            data-testid="bottom-page-switcher__btn"
            key={index}
            className={classNames({
              "bottom-page-switcher--active": index === curTabState,
            })}
            onClick={() => clickHandler(index)}
            style={{ width: `${100 / states.length}%` }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

BottomPageSwitcher.propTypes = {
  states: PropTypes.array.isRequired,
  onTabChange: PropTypes.func,
  curTab: PropTypes.number,
};

export default BottomPageSwitcher;
