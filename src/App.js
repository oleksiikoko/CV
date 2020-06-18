import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="flex-raw-container jc-sa ai-center">
          <div className="portfolio-container portfolio-container-animation box"></div>
          <div className="cv-container box"></div>
          <div className="contacts-about">
            <div className="about-container box"></div>
            <div className="contacts-container box"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
