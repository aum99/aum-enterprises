import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import {
  Navbar,
  NavLinksContainer,
  NavbarBrand,
  Navlink,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <Navbar>
        <NavbarBrand to="/">Aum Enterprises</NavbarBrand>
        <NavLinksContainer>
          <Navlink to="/categories">Categories</Navlink>
          <Navlink to="/auth">Sign In</Navlink>
        </NavLinksContainer>
      </Navbar>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
