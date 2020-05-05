import React from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebaseUtils";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Header.scss";

const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <NavLink to="/signin">SIGN IN</NavLink>
      )}
    </div>
  </div>
);

export default Header;
