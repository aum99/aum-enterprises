import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import AllCategories from "../../components/all categories/all-categories.component";
import Category from "../../components/category/category.component";

import { fetchCategoriesStart } from "../../store/categories/categories.action";

// import { addCollectionsAndDocuments } from "../../utils/firebase/firebase.utils";

// import SHOP_DATA from "../../shopData.js";

const Categories = () => {
  // useEffect(() => {
  //   addCollectionsAndDocuments("categories", SHOP_DATA);
  // }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  });
  return (
    <Routes>
      <Route index element={<AllCategories />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Categories;
