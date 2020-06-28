import React from "react";
import classNames from "classnames";

import "./ContactLinks.scss";

const ContactLinks = ({ mobile, show = true }) => {
  const contactsContainerClassNames = classNames("box", "contacts-container", {
    "contacts-container--animation": !show,
    "contacts-container--reverse-animation": show,
  });
  const titleClassName = classNames("title", {
    "title--center": !mobile,
    p20: !mobile,
  });

  return <div className={contactsContainerClassNames}></div>;
};

export default ContactLinks;
