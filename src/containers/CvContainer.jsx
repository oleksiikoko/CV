import React from "react";
import { connect } from "react-redux";

import { Contacts, Description, BlockTitle } from "components";
import { CvBottomPageSwitcher, Portfolio, About } from "containers";

import { fetchAbout } from "redux/About/actions";

const skills = `<ul>
<li>
  Understanding JavaScript strengths and weaknesses, <b>es5</b> 
  and <b>es6</b> Standards
</li>
<li>Manipulating a DOM model </li>
<li>Markup of adaptive, flexbox HTML pages using SCSS preprocessor following the BEM methodology</li>
<li>
  SPA application development using the React and React-router
  framework, implementation of the Redux state management tool
</li>
<li>
  Creating RestApi with Node.js, using Express and mongoose to
  work with MongoDB
</li>
<li>
  Writing clean, reusable, mutable code using OOP/OOD principles
</li>
<li>Networking protocols: TCP/IP, HTTP - Linux - Git</li>
</ul>`;

const CvContainer = ({ curPage, screenVersion, fetchAbout }) => {
  fetchAbout();
  return (
    <div className="cv-container box">
      <div className="cv-header">
        <p className="cv-header__name">Oleksii Kovalchuk</p>
        <p className="cv-header__position">Frontend Developer</p>
      </div>
      <div className="cv-content">
        {screenVersion.mobile && <About />}
        <div className="cv-skills">
          <BlockTitle inCvBlock text="Skills" />
          <Description description={skills} />
        </div>
        {!screenVersion.desktop && <Portfolio mobile={true} />}
        <div>
          <div className="cv-experience">
            <BlockTitle inCvBlock text="Experience" />
            <p className="info-box__text">
              Startup “Extracoin” - C++/Qt developer https://etalonium.io/ Jan
              2019 - Dec 2019 - Decentralized application development -
              Multithreaded code execution - Finding and preventing memory leaks
              - Blockchain network support
            </p>
          </div>
          <div className="cv-education">
            <BlockTitle inCvBlock text="Education" />
            <Description
              description={`
              <p>Unit Factory pool Was engaged in an intensive boot camp of C
              language course where everyone learns himself to work with strict
              deadlines and self-planning. Basics of networking. Introduction to
              Unix National Technical University of Ukraine "Igor Sikorsky Kyiv
              Polytechnic Institute" - Bachelor Applied mathematics
            </p>`}
            />
          </div>
        </div>
        <div className="cv-english df ai-center ">
          <BlockTitle inCvBlock text="English" dash />
          <Description
            description={`<p>Pre-Intermediate(read, write, and support documentation.)</p>`}
          />
        </div>
        {screenVersion.mobile && <Contacts mobile={true} />}
      </div>
      <CvBottomPageSwitcher />
    </div>
  );
};
const mapStateToProps = (state) => ({
  curPage: state.main.page,
  screenVersion: state.main.screenVersion,
});

const mapDispatchToProps = {
  fetchAbout,
};

export default connect(mapStateToProps, mapDispatchToProps)(CvContainer);
