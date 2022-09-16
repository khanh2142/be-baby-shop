import React from "react";
import { Container } from "react-bootstrap";

import "../../styles/category/category.css";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <Container className="category">
      <CategoryItem content="Bed Sets" />
      <CategoryItem content="Sleepwear" />
      <CategoryItem content="Pyjamas" />
      <CategoryItem content="Nighties" />
      <CategoryItem content="Bathrobes" />
      <CategoryItem content="Classic" />
      <CategoryItem content="Fancy" />
      <CategoryItem content="More products" />
    </Container>
  );
};

export default Category;
