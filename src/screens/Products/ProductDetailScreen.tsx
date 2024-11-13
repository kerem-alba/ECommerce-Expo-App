import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigations/type";
import { Product } from "../../utils/types";
import Button from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { useCartStore } from "../../stores/cartStore";
import CustomHeader from "../../components/Header/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";

type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, "ProductDetail">;

export default function ProductDetailScreen() {
  const [isDisabled, setIsDisabled] = React.useState(false);
  const route = useRoute<ProductDetailScreenRouteProp>();
  const navigation = useNavigation();

  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  const { product } = route.params;

  const handleAdd = () => {
    addToCart(product);
  };

  useEffect(() => {
    const found = cart.find((item: Product) => item.id === product.id);
    if (found) {
      setIsDisabled(true);
    }
  }, [cart]);

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader />
      {product.images && product.images.length > 0 && <Image source={{ uri: product.images[0] }} style={styles.image} />}
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price} USD</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button onPress={handleAdd} text="Add to cart" disabled={isDisabled} />
      <Button text="Go Back" onPress={() => navigation.goBack()} disabled={false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: "gray",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
  },
});
