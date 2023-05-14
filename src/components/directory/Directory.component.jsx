import React from "react";
import CategoryItem from "../category-item/Category-item";
import { categories } from "../../data";
import "./directory.styles.scss";

const Directory = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
