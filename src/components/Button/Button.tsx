import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { styles } from "./Styles";

interface ButtonProps {
  onPress: () => void;
  text: string;
  disabled: boolean;
}

export default function Button(buttonProps: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={buttonProps.onPress}
      disabled={buttonProps.disabled}
      style={[styles.btn, { backgroundColor: buttonProps.disabled ? "gray" : "#000B58" }]}
    >
      <Text style={styles.btn_text}>{buttonProps.text}</Text>
    </TouchableOpacity>
  );
}
