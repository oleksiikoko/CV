import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header" data-testid="header">
      <p className="header__name">Oleksii Kovalchuk</p>
      <p className="header__position">Frontend Developer</p>
    </div>
  );
};

export default Header;
