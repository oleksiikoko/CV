import React from "react";

import ApiSvg from "assets/img/Api.svg";
import "./Main.scss";
import Portfolio from "containers/Portfolio";
import CvBottomPageSwitcher from "../../containers/CvBottomPageSwitcher";
import InfoBar from "../../containers/InfoBar";
import CvContainer from "../../containers/CvContainer";
import { connect } from "react-redux";

const Main = ({ screenVersion }) => {
  return (
    <div className="container">
      <div className="flex-raw-container jc-sa ai-center">
        <Portfolio mobile={false} />
        <CvContainer />
        <InfoBar />
      </div>
    </div>
  );
};

export default Main;
