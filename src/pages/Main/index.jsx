import React from "react";

import "./Main.scss";

const Main = () => {
  return (
    <div className="container">
      <div className="flex-raw-container jc-sa ai-center">
        <div className="portfolio-container portfolio-container--animation box"></div>
        <div className="cv-container box">
          <div className="cv-switch">
            <span>CV</span>
            <span>Motivation</span>
          </div>
        </div>
        <div className="contacts-about">
          <div className="about-container about-container--animation box"></div>
          <div className="contacts-container contacts-container--animation box"></div>
          <div className="api-container flex-raw-container jc-sb">
            <div className="api box"></div>
            <div className="pdf box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
