import React from "react";
import PropTypes from "prop-types";

import { getIcon } from "utils";

import "./Contacts.scss";

const Contacts = ({ items }) => {
  return (
    <>
      {items.map((item, index) => {
        const Icon = getIcon(item.iconId);

        return (
          <div key={index} className="contact-item df" data-testid="contacts">
            <Icon />
            <a href={item.href}>{item.contact}</a>
          </div>
        );
      })}
    </>
  );
};

Contacts.propTypes = {
  items: PropTypes.array,
  mobile: PropTypes.bool,
  show: PropTypes.bool,
  expand: PropTypes.bool,
};

export default Contacts;
