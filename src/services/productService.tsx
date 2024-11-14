import { BASE_URL } from "../utils/constants";
import { Category, Product } from "../utils/types";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${BASE_URL}categories`);
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
};

export const getProductsByCategory = async (categoryId: number): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}categories/${categoryId}/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};
