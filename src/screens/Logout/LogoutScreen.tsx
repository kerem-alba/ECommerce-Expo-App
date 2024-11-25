import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigations/type";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { removeToken } from "../../services/AsyncStorageService";

type LogoutScreenProp = NativeStackNavigationProp<RootStackParamList, "Logout">;

export default function LogoutScreen() {
  const navigation = useNavigation<LogoutScreenProp>();

  useEffect(() => {
    const handleLogout = async () => {
      await removeToken();
      navigation.reset({
        routes: [{ name: "Login" }],
      });
    };

    handleLogout();
  }, []);

  return (
    <View>
      <Text>LogoutScreen</Text>
    </View>
  );
}
