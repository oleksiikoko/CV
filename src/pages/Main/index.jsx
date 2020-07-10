import React from "react";
import { connect } from "react-redux";

import { Portfolio, CvContainer, InfoBar } from "containers";

import "./Main.scss";

const Main = ({ screenVersion }) => {
  console.log(screenVersion);
  return (
    <div className="container">
      <div className="flex-raw-container jc-sa ai-center">
        {screenVersion.desktop && <Portfolio mobile={false} />}
        <CvContainer />
        {!screenVersion.mobile && <InfoBar />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  screenVersion: state.main.screenVersion,
});

export default connect(mapStateToProps, null)(Main);
