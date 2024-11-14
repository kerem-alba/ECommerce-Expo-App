import { StyleSheet } from "react-native";
import { BACKGROUND_COLOR, PRIMARY_COLOR } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: BACKGROUND_COLOR,
  },
  header: {
    fontSize: 24,
    fontFamily: "HostGrotesk-Bold",
    color: PRIMARY_COLOR,
    textAlign: "center",
    marginBottom: 10,
  },
  totalPrice: {
    fontSize: 20,
    fontFamily: "HostGrotesk-Medium",
    color: PRIMARY_COLOR,
    textAlign: "right",
    marginVertical: 10,
    marginRight: 10,
  },
});
