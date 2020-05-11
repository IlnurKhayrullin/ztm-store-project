import React from "react";
import { connect } from "react-redux";

import { selectCartiTems } from "../../redux/cart/cart-selectors";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={CartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton />
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartiTems(state),
});

export default connect(mapStateToProps)(CartDropdown);
