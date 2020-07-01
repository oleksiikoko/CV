import React from "react";
import { connect } from "react-redux";

import { About, Contacts } from "components";

const InfoBar = ({ curPage }) => {
  return (
    <div className="contacts-about">
      <About show={curPage === 0} />
      <Contacts show={curPage === 0} />
      <div className="api-container flex-raw-container jc-sb">
        <div className="api box flex-raw-container jc-center ai-center">
          {/* <img src={ApiSvg} alt="Api" /> */}
          <p>CV API</p>
        </div>
        <div className="pdf box"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  curPage: state.main.page,
});

export default connect(mapStateToProps, null)(InfoBar);
