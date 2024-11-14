import { StyleSheet } from "react-native";
import { TEXT_COLOR, TEXT_LIGHT } from "../../utils/colors";

export const styles = StyleSheet.create({
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 4,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    justifyContent: "center",
  },
  productTitle: {
    fontSize: 16,
    fontFamily: "HostGrotesk-Bold",
    color: TEXT_COLOR,
  },
  productPrice: {
    fontSize: 14,
    fontFamily: "HostGrotesk-Regular",
    color: TEXT_LIGHT,
    marginTop: 5,
  },
  removeButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
