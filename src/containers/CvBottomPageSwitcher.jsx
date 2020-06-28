import React from "react";

import BottomPageSwitcher from "../components/BottomPageSwitcher";
import { connect } from "react-redux";

import { setCvPage, setMotivationPage } from "./../redux/Main/actions";

const CvBottomPageSwitcher = ({ curPage, setCvPage, setMotivationPage }) => {
  const onTabChange = (index) => {
    switch (index) {
      case 0:
        setCvPage();
        break;
      case 1:
        setMotivationPage();
        break;
      default:
        break;
    }
  };

  return (
    <BottomPageSwitcher
      states={[{ name: "CV" }, { name: "Motivation" }]}
      onTabChange={onTabChange}
      curTab={curPage}
    />
  );
};

const mapStateToProps = (state) => ({
  curPage: state.main.page,
});

const mapDispatchToProps = {
  setCvPage,
  setMotivationPage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CvBottomPageSwitcher);
