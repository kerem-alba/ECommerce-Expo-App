import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigations/type";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { removeToken } from "../../services/AsyncStorageService";
import { MaterialIcons } from "@expo/vector-icons";

type NavigationProps = BottomTabScreenProps<RootStackParamList, "Home">["navigation"];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProps>();

  const handleLogout = async () => {
    console.log("Logout");
    await removeToken();
    console.log("Token removed");
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={handleLogout}>
        <MaterialIcons name="logout" size={24} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
