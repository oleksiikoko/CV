import React from "react";
import classNames from "classnames";

import { getIcon } from "utils";

import "./Contacts.scss";
import BlockTitle from "./../BlockTitle/index";

const Contacts = ({ mobile, show }) => {
  const contactsContainerClassNames = classNames("contacts-container", {
    box: !mobile,
    "contacts-container--animation": !show && !mobile,
    "contacts-container--reverse-animation": show && !mobile,
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
      <BlockTitle text="Contacts" inCvBlock={mobile} />

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

export default Contacts;
