import React from "react";

import "./Description.scss";

const Description = ({ description }) => {
  return (
    <p
      className="description"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
};

export default Description;
