import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 25px;
  padding: 0 100px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
