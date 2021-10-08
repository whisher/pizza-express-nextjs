import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import type { CartDto } from "../../types";

interface CartState {
  cart: { [id: string]: CartDto };
  addItem: ({ id, name, price }: Omit<CartDto, "quantity">) => void;
  removeItem: (id: string) => void;
}
export const useCart = create<CartState>(
  devtools(
    persist(
      (set, get) => ({
        cart: {},
        addItem: ({ id, image, name, price }) => {
          set(() => {
            const cart = get().cart;
            if (!cart[id]) {
              cart[id] = {
                id,
                image,
                name,
                price,
                quantity: 0
              };
            }

            cart[id].quantity += 1;

            return { cart };
          });
        },
        removeItem: (id) => {
          set(() => {
            const cart = get().cart;

            if (!cart[id]) {
              return { cart };
            }

            const newQuantity = cart[id].quantity - 1;
            if (newQuantity <= 0) {
              delete cart[id];
            } else {
              cart[id].quantity = newQuantity;
            }

            return { cart };
          });
        }
      }),
      {
        name: "cart",
        getStorage: () => localStorage
      }
    )
  )
);
