import React from "react";

import "./Portfolio.scss";
import { PortfolioItem } from "components";

const Portfolio = ({ porfolioItems }) => {
  const porfolioItems1 = [
    [
      {
        iconId: "figma",
        name: "Maket",
        url:
          "https://www.figma.com/file/RDlQxmX94XD7TZvDuRsB4j/CV?node-id=1%3A4",
        color: "figma",
      },
      {
        iconId: "gitHub",
        name: "Code",
        url:
          "https://www.figma.com/file/RDlQxmX94XD7TZvDuRsB4j/CV?node-id=1%3A4",
        color: "blue",
      },
      {
        iconId: "heroku",
        name: "Deploy",
        url:
          "https://www.figma.com/file/RDlQxmX94XD7TZvDuRsB4j/CV?node-id=1%3A4",
        color: "purple",
      },
    ],
    [
      {
        iconId: "gitHub",
        name: "Code",
        url:
          "https://www.figma.com/file/RDlQxmX94XD7TZvDuRsB4j/CV?node-id=1%3A4",
        color: "blue",
      },
    ],
    [
      {
        iconId: "figma",
        name: "Maket",
        url:
          "https://www.figma.com/file/RDlQxmX94XD7TZvDuRsB4j/CV?node-id=1%3A4",
        color: "figma",
      },
      {
        iconId: "gitHub",
        name: "Code",
        url:
          "https://www.figma.com/file/RDlQxmX94XD7TZvDuRsB4j/CV?node-id=1%3A4",
        color: "blue",
      },
    ],
    [
      {
        iconId: "figma",
        name: "Maket",
        url:
          "https://www.figma.com/file/RDlQxmX94XD7TZvDuRsB4j/CV?node-id=1%3A4",
        color: "figma",
      },
      {
        iconId: "gitHub",
        name: "Code",
        url:
          "https://www.figma.com/file/RDlQxmX94XD7TZvDuRsB4j/CV?node-id=1%3A4",
        color: "blue",
      },
      {
        iconId: "heroku",
        name: "Deploy",
        url:
          "https://www.figma.com/file/RDlQxmX94XD7TZvDuRsB4j/CV?node-id=1%3A4",
        color: "purple",
      },
    ],
    [
      {
        iconId: "figma",
        name: "Maket",
        url:
          "https://www.figma.com/file/RDlQxmX94XD7TZvDuRsB4j/CV?node-id=1%3A4",
        color: "figma",
      },
      {
        iconId: "gitHub",
        name: "Code",
        url:
          "https://www.figma.com/file/RDlQxmX94XD7TZvDuRsB4j/CV?node-id=1%3A4",
        color: "blue",
      },
      {
        iconId: "heroku",
        name: "Deploy",
        url:
          "https://www.figma.com/file/RDlQxmX94XD7TZvDuRsB4j/CV?node-id=1%3A4",
        color: "purple",
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
