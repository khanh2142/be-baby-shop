import React from "react";

const HeaderSubLink = (props) => {
  return (
    <div className="headerSubLink">
      <div className="headerSubLink__icon">
        <i className={props.icon}></i>
        {props.isCount ? (
          <div className="headerSubLink__count">{props.count}</div>
        ) : (
          ""
        )}
      </div>

      {props.icon === `fa-solid fa-bag-shopping` ? (
        <div className="headerSubLink__desc">$0.00</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HeaderSubLink;
