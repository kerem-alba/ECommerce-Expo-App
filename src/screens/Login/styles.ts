import { StyleSheet, Dimensions } from "react-native";
import { BACKGROUND_COLOR, SECONDARY_COLOR } from "../../utils/colors";

const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SECONDARY_COLOR,
  },
  logo: {
    width: width,
    height: 300,
    alignSelf: "center",
  },
});
