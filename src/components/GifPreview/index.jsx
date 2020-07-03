import React, { useState } from "react";
import gifDurations from "gif-me-duration";
import classNames from "classnames";

import { getFirstElementByClassName } from "utils";

const GifPreview = ({ gifPreview, showPreview, onPreviewEnded, name }) => {
  const [previewGifHeight, setPreviewGifHeight] = useState(null);
  const [previewDuration, setPreviewDuration] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);

  if (previewGifHeight === null) {
    let gifPreviewImg = new Image();
    gifPreviewImg.onload = () => {
      const portfolioItemWidth = getFirstElementByClassName("portfolio").width;
      setPreviewGifHeight(
        gifPreviewImg.height * (portfolioItemWidth / gifPreviewImg.width)
      );
      gifDurations(gifPreviewImg.src).then((result) => {
        setPreviewDuration(result[0].duration);
      });
    };
    gifPreviewImg.src = gifPreview;
  }

  if (showPreview) {
    setTimeout(onPreviewEnded, previewDuration);
  }

  const previewStyle =
    showPreview && previewGifHeight
      ? { height: previewGifHeight.toString() + "px" }
      : {};

  return (
    <img
      className={classNames("portfolio__gif-preview", {
        "portfolio__gif-preview--show": showPreview,
      })}
      id={name}
      src={gifPreview}
      style={previewStyle}
      alt={`${name} preview`}
      onClick={() => setFullScreen(!fullScreen)}
    />
  );
};

export default GifPreview;
