import { View, Text, FlatList, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigations/type";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { getCategories, getProductsByCategory } from "../../services/productService";
import { useQuery } from "@tanstack/react-query";
import CategoryInfoBox from "../../components/Category/CategoryInfoBox";
import { Category, Product } from "../../utils/types";
import ProductInfoBox from "../../components/Product/ProductInfoBox";
import Loading from "../../components/Modal/Loading";
import { styles } from "./styles";

type NavigationProps = BottomTabScreenProps<RootStackParamList, "Products">["navigation"];

export default function CategoriesScreen() {
  const navigation = useNavigation<NavigationProps>();

  const [selectedCategory, setSelectedCategory] = React.useState<Category | null>(null);
  const [products, setProducts] = React.useState<Product[] | null>(null);

  const { data, isPending, error, isSuccess, isError, isLoading, refetch } = useQuery({
    queryKey: ["getCategories"],
    queryFn: getCategories,
  });

  const HandlePress = (item: Category) => {
    setSelectedCategory(item);
  };

  useEffect(() => {
    if (isSuccess && data && data.length > 0) {
      setSelectedCategory(data[0]);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (selectedCategory) {
        const productsOfSelectedCategory = await getProductsByCategory(selectedCategory.id);
        setProducts(productsOfSelectedCategory);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>CATEGORIES</Text>
      {isSuccess && data ? (
        <>
          <FlatList
            data={data}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => HandlePress(item)}
                style={[styles.categoryButton, selectedCategory?.id === item.id && styles.selectedCategoryButton]}
              >
                <CategoryInfoBox category={item} />
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.categoryList}
          />
          {selectedCategory && (
            <FlatList
              data={products}
              numColumns={2}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Pressable style={styles.productPressable} onPress={() => navigation.navigate("ProductDetail", { product: item })}>
                  <ProductInfoBox product={item} />
                </Pressable>
              )}
              contentContainerStyle={styles.productList}
            />
          )}
        </>
      ) : (
        isLoading && <Loading />
      )}
    </SafeAreaView>
  );
}
