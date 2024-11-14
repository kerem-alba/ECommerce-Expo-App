import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigations/type";
import { Product } from "../../utils/types";
import Button from "../../components/Button/Button";
import { useCartStore } from "../../stores/cartStore";
import CustomHeader from "../../components/Header/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

const { width } = Dimensions.get("window");

type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, "ProductDetail">;

export default function ProductDetailScreen() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const route = useRoute<ProductDetailScreenRouteProp>();
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

  const handleThumbnailPress = (index: number) => {
    setActiveIndex(index);
    scrollViewRef.current?.scrollTo({ x: index * width, animated: true });
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader />
      <ScrollView>
        {product.images && product.images.length > 0 && (
          <>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={true}
              style={styles.imageContainer}
              ref={scrollViewRef}
              onScroll={(event) => {
                const scrollPosition = event.nativeEvent.contentOffset.x;
                const index = Math.round(scrollPosition / width);
                setActiveIndex(index);
              }}
              scrollEventThrottle={16}
            >
              {product.images.map((imageUri, index) => (
                <Image key={index} source={{ uri: imageUri }} style={styles.image} />
              ))}
            </ScrollView>

            <FlatList
              data={product.images}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.thumbnailContainer}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => handleThumbnailPress(index)}>
                  <Image source={{ uri: item }} style={[styles.thumbnail, activeIndex === index && styles.activeThumbnail]} />
                </TouchableOpacity>
              )}
            />
          </>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price} USD</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <Button onPress={handleAdd} text="Add to cart" disabled={isDisabled} />
      </ScrollView>
    </SafeAreaView>
  );
}
