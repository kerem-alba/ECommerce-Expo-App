import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigations/type";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type LogoutScreenProp = NativeStackNavigationProp<RootStackParamList, "Logout">;

export default function LogoutScreen() {
  const navigation = useNavigation<LogoutScreenProp>();

  navigation.navigate("Login");
  return (
    <View>
      <Text>LogoutScreen</Text>
    </View>
  );
}
