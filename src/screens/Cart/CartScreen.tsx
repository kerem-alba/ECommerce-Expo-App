import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCartStore } from "../../stores/cartStore";
import { Product } from "../../utils/types";
import ProductInfoBox from "../../components/Product/ProductInfoBox";
import CartInfoBox from "../../components/Cart/CartInfoBox";
import { styles } from "./styles";

export default function CartScreen() {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    const products = cart.map((item) => item);
    setCartProducts(products);
    calculateTotalPrice();
  }, [cart]);

  const handleRemove = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    useCartStore.setState({ cart: updatedCart });
  };

  const calculateTotalPrice = () => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>MY CART</Text>
      <FlatList
        data={cartProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartInfoBox product={item} onRemove={handleRemove} />}
      />
      <Text style={styles.totalPrice}>Total: {totalPrice} USD</Text>
    </SafeAreaView>
  );
}
