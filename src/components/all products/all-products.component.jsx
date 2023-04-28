import { useSelector } from "react-redux";

import { CategoriesContainer, Container } from "./all-products.styles";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import ProductCard from "../product-card/product.component";

const AllProducts = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  console.log(categoriesMap);
  return (
    <Container>
      <h1>All Products</h1>

      <CategoriesContainer>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ));
        })}
      </CategoriesContainer>
    </Container>
  );
};

export default AllProducts;
