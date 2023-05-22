import React from "react";

import Button from "../button/button.component";

import "./cart-dropdown.scss";

const CartDropdown = () => (
  <div className="cart-dropdown-container">
    <div className="cart-items" />
    <Button> CHECKOUT</Button>
  </div>
);

export default CartDropdown;
