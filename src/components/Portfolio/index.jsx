import React from "react";

import FigmaSvg from "assets/img/FigmaIcon.svg";
import GitHubSvg from "assets/img/gitHub.svg";
import HerokuSvg from "assets/img/heroku.svg";

import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio-container portfolio-container--animation box">
      <p className="title title--center p20">Portfolio</p>
      <div className="portfolio">
        <ul>
          <li>
            <p className="portfolio__name">cv.io</p>
            <div className="button-container df">
              <img src="" alt="" />
              <button className="portfolio__button portfolio__button--blue  w50p">
                Maket
              </button>
              <button className="portfolio__button w50p">Code</button>
            </div>
          </li>
          <li>
            <p className="portfolio__name">cv.io</p>
            <div className="button-container df">
              <button className="portfolio__button portfolio__button--figma  w33p">
                <img src={FigmaSvg} alt="" />
                <p>Maket</p>
              </button>
              <button className="portfolio__button w33p portfolio__button--blue">
                <img src={GitHubSvg} alt="" />
                <p>Code</p>
              </button>
              <button className="portfolio__button w33p portfolio__button--purple">
                <img src={HerokuSvg} alt="" />
                {/* <HerokuSvg /> */}
                <p>Deploy</p>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
