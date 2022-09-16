import React from "react";

const CategoryItem = (props) => {
  return (
    <div className="categoryItem">
      <div className="categoryItem__content">{props.content}</div>
      <div className="categoryItem__link">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default CategoryItem;
