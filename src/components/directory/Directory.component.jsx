import React from "react";
import DirectoryItem from "../directory-item/directory-item";
import { categories } from "../../data";
import { DirectoryContainer } from "./directory.styles";

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
