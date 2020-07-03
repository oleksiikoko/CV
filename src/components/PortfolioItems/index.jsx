import React from "react";

import { PortfolioItem } from "components";

const stringToImgSource = (img) => {
  if (img === undefined) return undefined;
  const base64 = btoa(
    new Uint8Array(img).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  return "data:;base64," + base64;
};

const PortfolioItems = ({ portfolioItems }) => {
  return (
    <ul className="portfolio__ul">
      {portfolioItems.map((item, index) => (
        <PortfolioItem
          key={index}
          _id={item._id}
          name={item.projectName}
          description={item.description}
          links={item.links}
          gifPreview={
            item.gifPreview && stringToImgSource(item.gifPreview.data.data)
          }
        />
      ))}
    </ul>
  );
};

export default PortfolioItems;
