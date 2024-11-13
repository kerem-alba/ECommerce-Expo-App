import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Product } from "../../utils/types";

type ProductInfoBoxProps = {
  product: Product;
};

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
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price} USD</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#182218",
    width: width * 0.45,
    height: 150,
    margin: 3,
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: width * 0.23,
    height: 150,
    marginRight: 5,
  },
  textContainer: {
    flex: 1,
    paddingVertical: 5,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  price: {
    fontSize: 12,
    color: "white",
    marginTop: 3,
  },
  description: {
    fontSize: 10,
    color: "white",
    marginTop: 3,
  },
  placeholderImage: {
    width: width * 0.23,
    height: 150,
    backgroundColor: "#ccc",
    marginRight: 5,
  },
});
