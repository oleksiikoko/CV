import React, { useState, useEffect } from "react";
import className from "classnames";

import { PortfolioButton } from "components";

import gifPreview from "assets/img/PortfolioGifPreview/GitHubSearchPreview.gif";
import "./PortfolioItem.scss";

// const portfolioItemStyleWhilePreview = (width) => {
//   return {
//     // color: "",
//     height: `${width}px`,
//   };
// };

// const findNotNullWidthElementBy = (nameOfClass) => {
//   return Array.from(document.getElementsByClassName(nameOfClass))
//     .find((htmlElement) => htmlElement.getBoundingClientRect().width !== 0)
//     .getBoundingClientRect();
// };

// const getImgHeight = (img) => {
//   let newImg = new Image();
//   newImg.src = img;
//   return newImg.height;
// };

// const getImgWidth = (img) => {
//   let newImg = new Image();
//   newImg.src = img;
//   return newImg.width;
// };

// const fitHeightBy

const PortfolioItem = ({ name, description, links }) => {
  const [showPreview, setShowPreview] = useState(false);
  // const

  useEffect(() => {
    // const portfolioItemWidth = findNotNullWidthElementBy("portfolio").width;
    // const previewGifHeight = getImgHeight(gifPreview);
    // const previewGifWidth = getImgWidth(gifPreview);
    // console.log(previewGifHeight);
    // const setPortfolioItemHeight =
    //   previewGifHeight * (previewGifWidth / portfolioItemWidth);
    // console.log(setPortfolioItemHeight);
  }, []);

  return (
    <li className="portfolio__item">
      <p className="portfolio__name">{name}</p>
      <div
        className="portfolio__preview--button"
        onClick={() => setShowPreview(!showPreview)}
      >
        Preview
      </div>
      <img
        className={className("portfolio__gif-preview", {
          "portfolio__gif-preview--show": showPreview,
        })}
        src={gifPreview}
        alt="loading..."
      />
      <p className="portfolio__description">{description}</p>
      <div className="button-container df">
        {links.map((item, index) => {
          return (
            <PortfolioButton
              url={item.url}
              color={item.color}
              iconId={item.iconId}
              name={item.name}
              countInLine={links.length}
              key={index}
            />
          );
        })}
      </div>
    </li>
  );
};

export default PortfolioItem;
