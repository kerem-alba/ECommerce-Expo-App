import AsyncStorage from "@react-native-async-storage/async-storage";
import { header } from "../utils/constants";

export const setToken = async (token: string) => {
  await AsyncStorage.setItem("token", token);
  header.token = token;
  console.log("Token set:", token);
};

export const getToken = async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    header.token = token;
    return token;
  }
  return "";
};

export const removeToken = async () => {
  await AsyncStorage.removeItem("token");
  header.token = "";
};
