import React from "react";
import { View, Text, Image } from "react-native";
import { Category } from "../../utils/types";
import { styles } from "./styles";

interface CategoryInfoBoxProps {
  category: Category;
}

export default function CategoryInfoBox({ category }: CategoryInfoBoxProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: category.image }} style={styles.image} />
      <Text style={styles.name}>{category.name}</Text>
    </View>
  );
}
