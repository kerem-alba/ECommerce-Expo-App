import { StyleSheet } from "react-native";
import { BACKGROUND_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TEXT_LIGHT } from "../../utils/colors";

export const styles = StyleSheet.create({
  input: {
    padding: 10,
    backgroundColor: SECONDARY_COLOR,
    flexGrow: 1,
  },
  input_container: {
    marginBottom: 8,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "lightgray",
  },
  password_container: {
    flexDirection: "row",
    backgroundColor: SECONDARY_COLOR,
    alignItems: "center",
    paddingRight: 10,
  },
  errorText: {
    color: "red",
    paddingTop: 6,
    fontSize: 12,
  },
});
