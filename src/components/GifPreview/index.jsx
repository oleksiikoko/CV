import React, { useState } from "react";
import PropTypes from "prop-types";
import gifDurations from "gif-me-duration";
import classNames from "classnames";

import { calculateGifHeightInsideBlockWidth } from "utils";

// import { gif } from "assets/testData/base64.gif.json";

const GifPreview = ({ gifPreview, showPreview, onPreviewEnded, name }) => {
  const [previewGifHeight, setPreviewGifHeight] = useState(null);
  const [previewDuration, setPreviewDuration] = useState(0);

  if (previewGifHeight === null) {
    setPreviewGifHeight(
      calculateGifHeightInsideBlockWidth(gifPreview, "portfolio")
    );
    gifDurations(gifPreview)
      .then((result) => {
        // console.log(gifPreview);
        setPreviewDuration(result[0].duration);
      })
      .catch(() => setPreviewDuration(5000));
    // // console.log(gifPreview);
    // // console.log(gif);
    // gifDurations(gif).then((result) => {
    //   console.log(result[0].duration);
    // });
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
      data-testid="gif-preview"
      className={classNames("portfolio__gif-preview", {
        "portfolio__gif-preview--show": showPreview,
      })}
      id={name}
      src={gifPreview}
      style={previewStyle}
      alt={`${name} preview`}
    />
  );
};

GifPreview.propTypes = {
  gifPreview: PropTypes.string.isRequired,
  showPreview: PropTypes.bool,
  onPreviewEnded: PropTypes.func,
  name: PropTypes.string,
};

export default GifPreview;
