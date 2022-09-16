import React from "react";
import { Container } from "react-bootstrap";

import decor from "../../image/decor.png";

import "../../styles/productCatalog/productCatalog.css";

import "../../styles/reuse/highlight.css";
import "../../styles/reuse/button.css";

import Product from "./Product";

const data = {
  name: "Duvet Cover Set Pumpkin Bear",
  color: [
    {
      name: "blue",
      code: "#3a6380",
    },
    {
      name: "red",
      code: "#bc2a32",
    },
  ],
  price: 15,
  sale: 10,
  image:
    "https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product1a-600x750.webp",
  imagePreview:
    "https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-product1b-600x750.webp",
};

const ProductCatalog = () => {
  return (
    <Container className="productCatalog">
      <img src={decor} className="productCatalog__decor"></img>
      <h3 className="productCatalog__desc">
        Welcome in our <span className="highlight">child's world.</span>
        <br />
        All our products are made
        <br />
        from generations with passion.
      </h3>
      <div className="productCatalog__title">
        Product's <br /> Catalog
      </div>

      <div className="productCatalog__list">
        <Product data={data} />
        <Product data={data} />
        <Product data={data} />
        <Product data={data} />
        <Product data={data} />
        <Product data={data} />
        <Product data={data} />
        <Product data={data} />
      </div>

      <div className="productCatalog__button">
        <div className="button btn-black ">go to shop</div>
        <div className="button btn-silver">see promotions</div>
      </div>
    </Container>
  );
};

export default ProductCatalog;
