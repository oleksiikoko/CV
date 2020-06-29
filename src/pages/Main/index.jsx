import React from "react";

import "./Main.scss";
import Portfolio from "containers/Portfolio";
import InfoBar from "../../containers/InfoBar";
import CvContainer from "../../containers/CvContainer";
import { connect } from "react-redux";

const Main = ({ screenVersion }) => {
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
