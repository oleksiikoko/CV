import React, { useState } from "react";
import className from "classnames";

import { getFirstElementByClassName } from "utils";
import { PreviewButton, Description } from "components";
import { PortfolioButtonsContainer } from "containers";

import "./PortfolioItem.scss";

const PortfolioItem = ({ _id, name, description, links, gifPreview }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [previewGifHeight, setPreviewGifHeight] = useState(null);

  if (gifPreview !== undefined && previewGifHeight === null) {
    const gifPreviewImg = new Image();
    gifPreviewImg.src = gifPreview;

    const portfolioItemWidth = getFirstElementByClassName("portfolio").width;
    const previewGifWidth = gifPreviewImg.width;

    setPreviewGifHeight(
      gifPreviewImg.height * (portfolioItemWidth / previewGifWidth)
    );
  }

  const previewStyle =
    showPreview && previewGifHeight
      ? { height: previewGifHeight.toString() + "px" }
      : {};

  return (
    <>
      <li className="portfolio__item">
        <p className="portfolio__name">{name}</p>
        {gifPreview !== undefined && (
          <>
            <PreviewButton
              _id={_id}
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
          </>
        )}
        <Description description={description} />
        <PortfolioButtonsContainer items={links} />
      </li>
      <div id={_id}></div>
    </>
  );
};

export default PortfolioItem;
