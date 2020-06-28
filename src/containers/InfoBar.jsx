import React from "react";

import About from "components/About";
import { connect } from "react-redux";
import ContactsLink from "../components/ContactsLink/index";

const InfoBar = ({ curPage }) => {
  return (
    <div className="contacts-about">
      <About show={curPage === 0} />
      <ContactsLink show={curPage === 0} />
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
