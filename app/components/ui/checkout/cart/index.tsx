import React from "react";
import { useCart } from "../../../../hooks/cart";
import { CheckoutCartEmpty } from "./empty";
import { CheckoutCartItems } from "./items";
import { cartQuantity, cartTotal } from "../../../../util/cart";

const CheckoutCart = () => {
  const cart = useCart((state) => ({
    data: state.cart
  }));
  const quantity = cartQuantity(cart.data);
  const total = cartTotal(cart.data);
  const hasProducts = quantity > 0;
  return (
    <>
      {hasProducts ? (
        <CheckoutCartItems cart={cart.data} quantity={quantity} total={total} />
      ) : (
        <CheckoutCartEmpty>Nessun prodotto nel carrello.</CheckoutCartEmpty>
      )}
    </>
  );
};

export { CheckoutCart };
