import React from "react";
import { connect } from "react-redux";

import { Main } from "pages";

import store from "redux/createStore";
import {
  setDesktopVersion,
  setTabletVersion,
  setMobileVersion,
} from "redux/Main/actions";
import { fetchPortfolio } from "redux/Portfolio/actions";
import throttle from "./utils/throttle";

function App({
  setDesktopVersion,
  setTabletVersion,
  setMobileVersion,
  fetchPortfolio,
}) {
  const setScreenVersion = () => {
    const width = window.innerWidth;
    const screenVersion = store.getState().main.screenVersion;

    if (width <= 800 && !screenVersion.mobile) {
      setMobileVersion();
    } else if (800 < width && width <= 1200 && !screenVersion.tablet) {
      setTabletVersion();
    } else if (width > 1200 && !screenVersion.desktop) {
      setDesktopVersion();
    }
  };
  const throttleResize = throttle(setScreenVersion, 1000);

  setScreenVersion();
  window.addEventListener("resize", throttleResize);

  // useEffect(() => {
  fetchPortfolio();
  // }, []);

  return (
    <div className="App">
      <div id="grey-screen"></div>
      <Main />
    </div>
  );
}

const mapDispatchToProps = {
  setDesktopVersion,
  setTabletVersion,
  setMobileVersion,
  fetchPortfolio,
};

export default connect(null, mapDispatchToProps)(App);
