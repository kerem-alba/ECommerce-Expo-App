import { Product } from "../utils/types";

export type RootStackParamList = {
  Introduction: undefined;
  Home: undefined;
  Login: undefined;
  Products: undefined;
  Main: { screen?: string };
  ProductDetail: { product: Product };
  Cart: undefined;
  Categories: undefined;
  Logout: undefined;
};
