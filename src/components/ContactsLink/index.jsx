import React from "react";
import classNames from "classnames";

import { PhoneSvg } from "assets/img/phone.svg";

import "./ContactLinks.scss";
import getIcon from "utils/getIcon";

const ContactLinks = ({ mobile, show = true }) => {
  const contactsContainerClassNames = classNames("box", "contacts-container", {
    "contacts-container--animation": !show,
    "contacts-container--reverse-animation": show,
  });
  const titleClassName = classNames("title", {
    "title--center": !mobile,
    p20: !mobile,
  });

  const contacts = [
    { iconId: "phone", contact: "+380966138713" },
    { iconId: "telegram", contact: "+380966138713" },
    { iconId: "mail", contact: "+380966138713" },
    { iconId: "gitHub", contact: "+380966138713" },
    { iconId: "linkedin", contact: "+380966138713" },
    { iconId: "skype", contact: "+380966138713" },
  ];

  return (
    <div className={contactsContainerClassNames}>
      <p className={titleClassName}>Contacts/Links{mobile ? ":" : ""}</p>

      {contacts.map((item, index) => {
        const Icon = getIcon(item.iconId);
        return (
          <div key={index} className="contact-item">
            <Icon />
            <p>{item.contact}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactLinks;
