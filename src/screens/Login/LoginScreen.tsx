import { View, Text, TextInput, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import PasswordInput from "../../components/Input/PasswordInput";
import { Formik } from "formik";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginSchema } from "../../utils/LoginSchema";
import { useMutation } from "@tanstack/react-query";
import { api_header, BASE_URL } from "../../utils/constants";
import { RootStackParamList } from "../../navigations/type";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { setToken } from "../../services/AsyncStorageService";
import { loginService } from "../../services/authService";
import ErrorModal from "../../components/Modal/ErrorModal";
import Loading from "../../components/Modal/Loading";

type NavigationProps = BottomTabScreenProps<RootStackParamList, "Login">["navigation"];

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProps>();

  const [modalVisible, setModalVisible] = useState(false);

  const login = (email: string, password: string) => {
    mutate({ email, password });
  };

  const { data, mutate, isSuccess, isError, isPending } = useMutation({
    mutationKey: ["Login"],
    mutationFn: loginService,
  });

  useEffect(() => {
    if (isSuccess && data?.access_token) {
      setToken(data.access_token);
      navigation.navigate("Main", { screen: "Home" });
    }
    if (isError || data?.message) {
      setModalVisible(true);
    }
  }, [isSuccess, isError]);

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ email: "john@mail.com", password: "changeme" }}
        onSubmit={(values) => {
          login(values.email, values.password);
        }}
        validationSchema={LoginSchema}
      >
        {({ handleChange, handleSubmit, values, isValid }) => (
          <>
            <Image source={require("../../../assets/logo.jpg")} style={styles.logo} />
            <Input
              labelText="Email"
              placeholder="Please enter your email address"
              value={values.email}
              onChangeText={handleChange("email")}
              errorText="Email is required"
            />
            <PasswordInput labelText="Password" value={values.password} onChangeText={handleChange("password")} errorText="Password is required" />
            <Button onPress={handleSubmit} text="Login" disabled={!isValid} />
          </>
        )}
      </Formik>
      {isPending && <Loading />}
      <ErrorModal errorText={data && data.message} visible={modalVisible} onClose={() => setModalVisible(false)} />
    </SafeAreaView>
  );
}
