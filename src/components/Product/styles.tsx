import { StyleSheet, Dimensions } from "react-native";
import { SECONDARY_COLOR, TEXT_COLOR, TEXT_LIGHT } from "../../utils/colors";

const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: width * 0.48,
    height: 260,
    margin: 3,
    marginBottom: 20,
    backgroundColor: SECONDARY_COLOR,
  },
  image: {
    width: width * 0.48,
    height: 150,
  },
  textContainer: {
    flex: 1,
    paddingVertical: 5,
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 16,
    fontFamily: "HostGrotesk-Bold",
    color: TEXT_COLOR,
    lineHeight: 20,
    minHeight: 40,
  },
  price: {
    fontSize: 15,
    color: "black",
    marginTop: 3,
    fontFamily: "HostGrotesk-Regular",
  },
  description: {
    fontSize: 10,
    fontFamily: "HostGrotesk-Light",
    color: TEXT_LIGHT,
    marginTop: 3,
    minHeight: 20,
  },
  placeholderImage: {
    width: width * 0.23,
    height: 150,
    backgroundColor: "#ccc",
    marginRight: 5,
  },
});
