import React, { useState } from "react";

import { PreviewButton, GifPreview } from "components";

const Preview = ({ _id, gifPreview, name }) => {
  const [showPreview, setShowPreview] = useState(false);

  if (gifPreview === undefined) return <></>;

  return (
    <>
      <PreviewButton
        _id={_id}
        className="portfolio__preview-button"
        onClick={() => setShowPreview(!showPreview)}
        active={showPreview}
      />
      <GifPreview
        gifPreview={gifPreview}
        showPreview={showPreview}
        onPreviewEnded={() => setShowPreview(false)}
        name={name}
      />
      {/* SelectBlocksOnGreyScreenById */}
    </>
  );
};

export default Preview;
