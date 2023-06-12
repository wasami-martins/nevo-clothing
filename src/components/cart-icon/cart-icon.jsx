// @ts-nocheck
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";
import shoppingBag from "/assets/shopping-bag.svg";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon src={shoppingBag} alt="shopping bag" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
