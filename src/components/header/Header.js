import React from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebaseUtils";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Header.scss";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

const Header = ({ currentUser, hidden }) => (
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
      <CartIcon />
    </div>
    {!hidden && <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
