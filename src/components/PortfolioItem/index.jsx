import React, { useState, useEffect } from "react";
import className from "classnames";

import { getFirstElementByClassName, getImgHeight, getImgWidth } from "utils";
import { PortfolioButton, PreviewButton, Description } from "components";

import "./PortfolioItem.scss";
import gifPreview from "assets/img/PortfolioGifPreview/GitHubSearchPreview.gif";

const PortfolioItem = ({ name, description, links }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [previewGifHeight, setPreviewGifHeight] = useState(null);

  useEffect(() => {
    const portfolioItemWidth = getFirstElementByClassName("portfolio").width;

    const previewGifWidth = getImgWidth(gifPreview);
    setPreviewGifHeight(
      getImgHeight(gifPreview) * (portfolioItemWidth / previewGifWidth)
    );
  }, []);

  const previewStyle =
    showPreview && previewGifHeight
      ? { height: previewGifHeight.toString() + "px" }
      : {};

  return (
    <li className="portfolio__item">
      <p className="portfolio__name">{name}</p>
      <PreviewButton
        className="portfolio__preview-button"
        onClick={() => setShowPreview(!showPreview)}
        active={showPreview}
      />
      <img
        className={className("portfolio__gif-preview", {
          "portfolio__gif-preview--show": showPreview,
        })}
        src={gifPreview}
        style={previewStyle}
        alt={`${name} preview`}
      />
      <Description description={description} />
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
