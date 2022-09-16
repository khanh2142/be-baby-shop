import React, { useState } from "react";

import "../../styles/productCatalog/product.css";

const Product = (props) => {
  const [data, setData] = useState(props.data);

  return (
    <div className="product">
      <div className="product__image">
        <img src={data.image}></img>
        <div
          className="product__image-preview"
          style={{ backgroundImage: `url(${data.imagePreview})` }}
        >
          <div className="product__preview-list">
            <div className="product__preview-item">
              <i className="fa-solid fa-link"></i>
            </div>
            <div className="product__preview-item">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="product__preview-item">
              <i className="fa-solid fa-maximize"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="product__name">{data.name}</div>
      <div className="product__color">
        {data.color.map((item) => {
          return (
            <div className="product__color-item">
              <span style={{ backgroundColor: item.code }}></span>
              <div className="product__color-name">{item.name}</div>
            </div>
          );
        })}
      </div>
      <div className="product__price">
        {data.sale ? (
          <div className="product__price-sale">${data.sale}.00</div>
        ) : (
          ""
        )}
        <div className="product__price-root">${data.price}.00</div>
      </div>
      {data.sale ? <div className="product__sale">on sale</div> : ""}
    </div>
  );
};

export default Product;
