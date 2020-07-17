import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setCvPage, setMotivationPage } from "redux/Main/actions";
import { BottomPageSwitcher } from "components";

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

CvBottomPageSwitcher.propTypes = {
  curPage: PropTypes.number,
  setCvPage: PropTypes.func,
  setMotivationPage: PropTypes.func,
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
