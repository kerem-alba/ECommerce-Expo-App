import { BASE_URL } from "../utils/constants";
import { Product } from "../utils/types";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};
