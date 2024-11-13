// stores/cartStore.ts
import { create } from "zustand";
import { Product } from "../utils/types";

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product: Product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
}));
