import React, { useState } from "react";

import { PreviewButton, GifPreview } from "components";

const Preview = ({ _id, gif, name }) => {
  const [showPreview, setShowPreview] = useState(false);

  if (gif === undefined) return <></>;

  return (
    <>
      <PreviewButton
        _id={_id}
        className="portfolio__preview-button"
        onClick={() => setShowPreview(!showPreview)}
        active={showPreview}
      />
      <GifPreview
        gif={gif}
        showPreview={showPreview}
        onPreviewEnded={() => setShowPreview(false)}
        name={name}
      />
    </>
  );
};

export default Preview;
