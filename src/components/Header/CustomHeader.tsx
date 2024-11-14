import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { RootStackParamList } from "../../navigations/type";
import { useCartStore } from "../../stores/cartStore";
import { Product } from "../../utils/types";
import { styles } from "./styles";

export default function CustomHeader() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    const products = cart.map((item) => item);
    setCartProducts(products);
  }, [cart]);

  const handleLogout = () => {
    console.log("Logged out");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>MF101 SHOP</Text>

      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={styles.cartIconContainer}>
          <MaterialIcons name="shopping-cart" size={24} color="white" />
          {cart.length > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cart.length}</Text>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <Feather name="log-out" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
