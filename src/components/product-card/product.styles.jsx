import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 90%;
  height: 350px;
  border: 1px solid black;
  display: inline-block;
  padding: 10px;

  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    margin-bottom: 5px;
  }
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: medium;
  margin-top: 5px;
`;

export const Price = styled.p`
  font-weight: 800;
  margin-top: 5px;
  font-size: large;
`;
