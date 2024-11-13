import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigations/type";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "ProductDetail">;

export default function CustomHeader() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogout = () => {
    // Logout işlemini burada gerçekleştirin
    console.log("Logged out");
  };

  return (
    <View style={styles.headerContainer}>
      {/* Sol tarafta geri tuşu */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Ortada başlık */}
      <Text style={styles.title}>Product Detail</Text>

      {/* Sağ tarafta Logout ve Cart simgeleri */}
      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={handleLogout}>
          <Feather name="log-out" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <MaterialIcons name="shopping-cart" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: "#000B58",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
  },
});
