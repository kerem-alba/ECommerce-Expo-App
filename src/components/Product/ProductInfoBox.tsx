import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { Product } from "../../utils/types";
import { styles } from "./styles";

interface ProductInfoBoxProps {
  product: Product;
}

const { width } = Dimensions.get("window");

export default function ProductInfoBox({ product }: ProductInfoBoxProps) {
  return (
    <View style={styles.container}>
      {product.images && product.images.length > 0 ? (
        <Image source={{ uri: product.images[0] }} style={styles.image} />
      ) : (
        <View style={styles.placeholderImage} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {product.title}
        </Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {product.description}
        </Text>
        <Text style={styles.price}>{product.price} USD</Text>
      </View>
    </View>
  );
}
