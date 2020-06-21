import React from "react";

import { ReactComponent as FigmaSvg } from "assets/img/FigmaIcon.svg";
import { ReactComponent as GitHubSvg } from "assets/img/gitHub.svg";
import { ReactComponent as HerokuSvg } from "assets/img/heroku.svg";

import "./Portfolio.scss";
import { PortfolioItem } from "components";

const Portfolio = ({ porfolioItems }) => {
  const porfolioItems1 = [
    [
      {
        icon: <FigmaSvg />,
        name: "Maket",
        url:
          "https://www.figma.com/file/RDlQxmX94XD7TZvDuRsB4j/CV?node-id=1%3A4",
        color: "figma",
      },
      {
        icon: <GitHubSvg />,
        name: "Code",
        url:
          "https://www.figma.com/file/RDlQxmX94XD7TZvDuRsB4j/CV?node-id=1%3A4",
        color: "blue",
      },
      {
        icon: <HerokuSvg />,
        name: "Deploy",
        url:
          "https://www.figma.com/file/RDlQxmX94XD7TZvDuRsB4j/CV?node-id=1%3A4",
        color: "purple",
      },
    ],
    [
      {
        icon: <GitHubSvg />,
        name: "Code",
        url:
          "https://www.figma.com/file/RDlQxmX94XD7TZvDuRsB4j/CV?node-id=1%3A4",
        color: "blue",
      },
    ],
    [
      {
        icon: <FigmaSvg />,
        name: "Maket",
        url:
          "https://www.figma.com/file/RDlQxmX94XD7TZvDuRsB4j/CV?node-id=1%3A4",
        color: "figma",
      },
      {
        icon: <GitHubSvg />,
        name: "Code",
        url:
          "https://www.figma.com/file/RDlQxmX94XD7TZvDuRsB4j/CV?node-id=1%3A4",
        color: "blue",
      },
    ],
  ];

  return (
    <div className="portfolio-container portfolio-container--animation box">
      <p className="title title--center">Portfolio</p>
      <div className="portfolio">
        <ul>
          {porfolioItems1.map((item, index) => (
            <li key={index}>
              <PortfolioItem name="Component test" items={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
