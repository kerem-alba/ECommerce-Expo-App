import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { RootStackParamList } from "../../navigations/type";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { getToken } from "../../services/AsyncStorageService";

type NavigationProps = BottomTabScreenProps<RootStackParamList, "Introduction">["navigation"];

export default function IntroductionScreen() {
  const navigation = useNavigation<NavigationProps>();

  console.log("IntroductionScreen");

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      console.log("Token alındı async storedan");
      //const token = "";
      if (token == null || token == "") {
        console.log("Home a gidiyoruz");
        navigation.navigate("Main", { screen: "Home" });
      } else {
        navigation.navigate("Login");
      }
    };

    checkToken();
  }, []);

  return (
    <View>
      <Text>IntroductionScreen</Text>
    </View>
  );
}