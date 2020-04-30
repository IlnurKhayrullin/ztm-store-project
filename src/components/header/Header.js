import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import './Header.scss'

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <NavLink to="/shop" className="option">
        SHOP
      </NavLink>
      <NavLink to="/shop" className="option">
        CONTACT
      </NavLink>
    </div>
  </div>
);

export default Header;
