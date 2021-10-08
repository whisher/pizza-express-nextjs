import { CartDto } from "../types";

export const cartQuantity = (cart: { [id: string]: CartDto }) => {
  const initialValue = 0;
  return Object.keys(cart).reduce(function (acc: number, current: string) {
    const item = cart[current];
    return acc + item.quantity;
  }, initialValue);
};

export const cartTotal = (cart: { [id: string]: CartDto }) => {
  const initialValue = 0;
  return Object.keys(cart).reduce(function (acc: number, current: string) {
    const item = cart[current];
    const subTotal = item.quantity * item.price;
    return acc + subTotal;
  }, initialValue);
};
