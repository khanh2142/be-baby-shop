import React from "react";

import "../../styles/benefit/benefitItem.css";

const BenefitItem = (props) => {
  return (
    <div className="benefitItem">
      <img src={props.image} className="benefitItem__image" />
      <div className="benefitItem__title">{props.title}</div>
      <div className="benefitItem__content">{props.content}</div>
    </div>
  );
};

export default BenefitItem;
