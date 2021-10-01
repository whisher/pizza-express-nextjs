import { CartDto } from "../types";

export const cartQuantity = (cart: { [id: string]: CartDto }) => {
  const initialValue = 0;
  return Object.keys(cart).reduce(function (acc: number, current: string) {
    const item = cart[current];
    return acc + item.quantity;
  }, initialValue);
};
