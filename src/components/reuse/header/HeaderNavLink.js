import React from "react";
import { Link } from "react-router-dom";

const HeaderNavLink = (props) => {
  return (
    <Link
      to="/"
      className={props.isActive ? `headerNavLink active` : `headerNavLink`}
    >
      <div className="headerNavLink__content">{props.content}</div>
      <div className="headerNavLink__border"></div>
    </Link>
  );
};

export default HeaderNavLink;
