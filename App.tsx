import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppNavigation from "./src/navigations/main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { useFonts } from "expo-font";

export default function App() {
  useFonts({
    "HostGrotesk-Bold": require("./assets/fonts/HostGrotesk-Bold.ttf"),
    "HostGrotesk-Regular": require("./assets/fonts/HostGrotesk-Regular.ttf"),
    "HostGrotesk-Medium": require("./assets/fonts/HostGrotesk-Medium.ttf"),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
