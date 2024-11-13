import { View, Text, FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigations/type";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/productService";
import ProductInfoBox from "../../components/Product/ProductInfoBox";
import Loading from "../../components/Modal/Loading";
import { Product } from "../../utils/types";

type NavigationProps = BottomTabScreenProps<RootStackParamList, "Products">["navigation"];

export default function ProductsScreen() {
  const navigation = useNavigation<NavigationProps>();
  const [visibleProductCount, setVisibleProductCount] = useState(10);

  const { data, isPending, error, isSuccess, isError, isLoading, refetch } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });

  const loadMoreProducts = () => {
    setVisibleProductCount((prev) => prev + 8);
  };

  return (
    <SafeAreaView>
      {isSuccess && data ? (
        <FlatList
          data={data.slice(0, visibleProductCount)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigation.navigate("ProductDetail", { product: item })}>
              <ProductInfoBox product={item} />
            </Pressable>
          )}
          numColumns={2}
          onEndReached={loadMoreProducts}
          onEndReachedThreshold={0.1}
        />
      ) : (
        isLoading && <Loading />
      )}
    </SafeAreaView>
  );
}
