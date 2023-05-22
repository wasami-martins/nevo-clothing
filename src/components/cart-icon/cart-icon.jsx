import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.scss";
import shoppingBag from "/assets/shopping-bag.svg";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div>
      <div className="cart-icon-container" onClick={toggleIsCartOpen}>
        <img src={shoppingBag} alt="shopping bag" className="shopping-icon" />
        <span className="item-count">0</span>
      </div>
    </div>
  );
};

export default CartIcon;