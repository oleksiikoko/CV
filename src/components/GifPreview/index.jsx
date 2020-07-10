import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { stringToImgSource, calculateGifHeightInsideBlockWidth } from "utils";

const GifPreview = ({ gif, showPreview, onPreviewEnded, name }) => {
  const previewGifHeight = calculateGifHeightInsideBlockWidth(
    gif.height,
    gif.width,
    "portfolio"
  );

  if (showPreview) {
    setTimeout(onPreviewEnded, gif.duration);
  }

  const previewStyle =
    showPreview && previewGifHeight !== null
      ? { height: previewGifHeight.toString() + "px" }
      : {};

  return (
    <img
      data-testid="gif-preview"
      className={classNames("portfolio__gif-preview", {
        "portfolio__gif-preview--show": showPreview,
      })}
      id={name}
      src={stringToImgSource(gif.data.data)}
      style={previewStyle}
      alt={`${name} preview`}
    />
  );
};

GifPreview.propTypes = {
  gif: PropTypes.object.isRequired,
  showPreview: PropTypes.bool,
  onPreviewEnded: PropTypes.func,
  name: PropTypes.string,
};

export default GifPreview;
