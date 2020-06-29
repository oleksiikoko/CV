import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Main } from "pages";

import store from "redux/createStore";
import {
  setDesktopVersion,
  setTabletVersion,
  setMobileVersion,
} from "redux/Main/actions";
import throttle from "./utils/throttle";

function App({ setDesktopVersion, setTabletVersion, setMobileVersion }) {
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

  useEffect(() => {
    window.addEventListener("resize", () => {
      throttleResize();
    });
    setScreenVersion();
  }, []);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

const mapDispatchToProps = {
  setDesktopVersion,
  setTabletVersion,
  setMobileVersion,
};

export default connect(null, mapDispatchToProps)(App);
