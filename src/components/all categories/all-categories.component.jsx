import React from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

const AllCategories = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  console.log(categoriesMap);
  return (
    <div>
      <h1>this is all categories page</h1>
      <h2>here all categories will be listed</h2>
    </div>
  );
};

export default AllCategories;
