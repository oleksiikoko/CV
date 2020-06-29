import React from "react";
import classNames from "classnames";

import { PhoneSvg } from "assets/img/phone.svg";

import "./ContactLinks.scss";
import getIcon from "utils/getIcon";

const ContactLinks = ({ mobile, show = true }) => {
  const contactsContainerClassNames = classNames("contacts-container", {
    box: !mobile,
    "contacts-container--animation": !show && !mobile,
    "contacts-container--reverse-animation": show && !mobile,
  });
  const titleClassName = classNames("title", "p20", {
    "title--center": !mobile,
    // p20: !mobile,
  });

  const contacts = [
    { iconId: "phone", contact: "+380966138713" },
    { iconId: "telegram", contact: "@oleksii_ko" },
    { iconId: "mail", contact: "oleksiij.ko@gmail.com" },
    { iconId: "gitHub", contact: "github.com/oleksiikoko" },
    { iconId: "linkedin", contact: "linkedin.com/in/oleksiiko" },
    { iconId: "skype", contact: "live:oleksiij.ko" },
  ];

  return (
    <div className={contactsContainerClassNames}>
      <p className={titleClassName}>Contacts/Links{mobile ? ":" : ""}</p>

      {contacts.map((item, index) => {
        const Icon = getIcon(item.iconId);
        return (
          <div key={index} className="contact-item df">
            <Icon />
            <p>{item.contact}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactLinks;
