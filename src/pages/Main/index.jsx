import React from "react";

import ApiSvg from "assets/img/Api.svg";
import "./Main.scss";
import Portfolio from "components/Portfolio";

const Main = () => {
  return (
    <div className="container">
      <div className="flex-raw-container jc-sa ai-center">
        <Portfolio />
        <div className="cv-container box">
          <div className="cv-header">
            <p className="cv-header__name">Oleksii Kovalchuk</p>
            <p className="cv-header__position">Frontend Developer</p>
          </div>
          <div className="cv-skills">
            <p className="title p20">Skills:</p>
          </div>
          <div className="df">
            <div className="cv-experience">
              <p className="title p20">Experience:</p>
            </div>
            <div className="cv-education">
              <p className="title p20">Education:</p>
            </div>
          </div>
          <div className="cv-english df ai-center p20">
            <p className="title">English - </p>
            <p> Pre-Intermediate(read, write, and support documentation.)</p>
          </div>
          <div className="cv-switch ">
            <div className="cv-switch--active">CV</div>
            <div>Motivation</div>
          </div>
        </div>
        <div className="contacts-about">
          <div className="about-container about-container--animation box"></div>
          <div className="contacts-container contacts-container--animation box"></div>
          <div className="api-container flex-raw-container jc-sb">
            <div className="api box flex-raw-container jc-center ai-center">
              <img src={ApiSvg} alt="Api" />
              <p>CV API</p>
            </div>
            <div className="pdf box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
