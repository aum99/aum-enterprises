import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
`;

export const NavbarBrand = styled(Link)`
  font-size: large;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`;

export const Navlink = styled(Link)`
  font-size: medium;
`;
