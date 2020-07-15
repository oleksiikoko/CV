import React from "react";
import { connect } from "react-redux";

import { About, Tools, Contacts } from "containers";

const InfoBar = ({ curPage }) => {
  return (
    <div className="contacts-about">
      <About />
      <Contacts show={curPage === 0} />
      <Tools />
    </div>
  );
};

const mapStateToProps = (state) => ({
  curPage: state.main.page,
});

export default connect(mapStateToProps, null)(InfoBar);
