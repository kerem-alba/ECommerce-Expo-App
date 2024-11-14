import { StyleSheet } from "react-native";
import { SECONDARY_COLOR, TEXT_COLOR } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 5,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 3,
  },
  name: {
    fontFamily: "HostGrotesk-Bold",
    color: TEXT_COLOR,
  },
});
