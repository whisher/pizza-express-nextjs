import React from "react";
import { useCart } from "../../../../hooks/cart";
import { CheckoutCartEmpty } from "./empty";
import { CheckoutCartItems } from "./items";
import { cartQuantity, cartTotal } from "../../../../util/cart";

const CheckoutCart = () => {
  const cart = useCart((state) => ({
    cart: state.cart
  }));
  const quantity = cartQuantity(cart.cart);
  const total = cartTotal(cart.cart);
  const hasProducts = quantity > 0;
  return (
    <>
      {hasProducts ? (
        <CheckoutCartItems cart={cart.cart} quantity={quantity} total={total} />
      ) : (
        <CheckoutCartEmpty>Nessun prodotto nel carrello.</CheckoutCartEmpty>
      )}
    </>
  );
};

export { CheckoutCart };
