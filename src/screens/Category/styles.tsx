import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR, TEXT_LIGHT, BACKGROUND_COLOR, DARK_COLOR } from "../../utils/colors";

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
  categoryList: {
    paddingVertical: 10,
    backgroundColor: DARK_COLOR,
    height: 180,
  },
  categoryButton: {
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: BACKGROUND_COLOR,
    height: 115,
  },
  selectedCategoryButton: {
    borderWidth: 2,
    borderColor: PRIMARY_COLOR,
  },
  productList: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  productPressable: {
    flex: 1,
  },
});
