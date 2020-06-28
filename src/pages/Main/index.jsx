import React from "react";

import ApiSvg from "assets/img/Api.svg";
import "./Main.scss";
import Portfolio from "containers/Portfolio";
import CvBottomPageSwitcher from "../../containers/CvBottomPageSwitcher";
import InfoBar from "../../containers/InfoBar";

const Main = () => {
  return (
    <div className="container">
      <div className="flex-raw-container jc-sa ai-center">
        <Portfolio mobile={false} />
        <div className="cv-container box">
          <div className="cv-header">
            <p className="cv-header__name">Oleksii Kovalchuk</p>
            <p className="cv-header__position">Frontend Developer</p>
          </div>
          <div className="cv-content">
            <Portfolio mobile={true} />
            <div className="cv-skills">
              <p className="title p20">Skills:</p>
              <p className="info-box__text">
                - Understanding JavaScript strengths and weaknesses, es5 and es6
                Standards - Manipulating a DOM model - Markup of adaptive,
                flexbox HTML pages using SCSS preprocessor following the BEM
                methodology - SPA application development using the React and
                React-router framework, implementation of the Redux state
                management tool - Creating RestApi with Node.js, using Express
                and mongoose to work with MongoDB - Writing clean, reusable,
                mutable code using OOP/OOD principles - Networking protocols:
                TCP/IP, HTTP - Linux - Git
              </p>
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
          </div>
          <CvBottomPageSwitcher />
        </div>
        <InfoBar />
      </div>
    </div>
  );
};

export default Main;
