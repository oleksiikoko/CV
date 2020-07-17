import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { connect } from "react-redux";

import { Contacts as ContactsBase, BlockTitle, Loader } from "components";
import { getIcon } from "utils";

const Contacts = ({ items, mobile, show, expand, loading }) => {
  const [expandState, setExpandState] = useState(expand);

  useEffect(() => {
    setExpandState(expand);
  }, [expand]);

  const contactsContainerClassNames = classNames("contacts-container", {
    box: !mobile,
    "contacts-container--animation": !show && !mobile,
    "contacts-container--reverse-animation": show && !mobile,
    "contacts-container--hide": !expandState && !mobile,
  });

  const DownArrowSvg = getIcon("downArrow");

  return (
    <div
      className={contactsContainerClassNames}
      data-testid="contacts-container"
    >
      <div
        data-testid="contacts-expand"
        className={classNames(
          "contact-title",
          mobile && "contact-title--in-cv"
        )}
        onClick={() => setExpandState(!expandState)}
      >
        <BlockTitle text="Contacts" inCvBlock={mobile} />
        {!mobile && <DownArrowSvg data-test-id="svg-arrow" />}
      </div>
      {loading ? <Loader /> : <ContactsBase items={items} />}
    </div>
  );
};

Contacts.propTypes = {
  items: PropTypes.array,
  mobile: PropTypes.bool,
  show: PropTypes.bool,
  expand: PropTypes.bool,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  items: state.contacts.items,
  loading: state.contacts.loading,
  expand: state.main.page === 1 || !state.main.lowHeightVersion,
});

export default connect(mapStateToProps, null)(Contacts);
