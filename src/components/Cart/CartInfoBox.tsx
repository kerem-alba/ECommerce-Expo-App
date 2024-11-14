import { View, Text, Image } from "react-native";
import React from "react";
import { Product } from "../../utils/types";
import Button from "../Button/Button";
import { styles } from "./styles";

interface CartInfoBoxProps {
  product: Product;
  onRemove: (productId: number) => void;
}

export default function CartInfoBox({ product, onRemove }: CartInfoBoxProps) {
  return (
    <View style={styles.productContainer}>
      <Image source={{ uri: product.images[0] }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productPrice}>{product.price} USD</Text>
      </View>
      <Button onPress={() => onRemove(product.id)} text="Remove" disabled={false} />
    </View>
  );
}
