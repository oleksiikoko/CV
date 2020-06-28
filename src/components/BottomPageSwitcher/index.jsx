import React, { useState } from "react";
import classNames from "classnames";

import "./BottomPageSwitcher.scss";

const BottomPageSwitcher = ({
  states = [{ name: "CV" }, { name: "Motivation" }],
  onTabChange,
  curTab = 0,
}) => {
  const [curTabState, setCurTabState] = useState(curTab);

  const clickHandler = (changeTo) => {
    if (changeTo !== curTabState) {
      setCurTabState(changeTo);
      onTabChange(changeTo);
    }
  };
  return (
    <div className="bottom-page-switcher">
      {/* <div className="cv-switch--active">CV</div> */}
      {/* <div>Motivation</div> */}
      {states.map((item, index) => {
        return (
          <div
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

export default BottomPageSwitcher;
