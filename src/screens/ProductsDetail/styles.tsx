import { StyleSheet, Dimensions } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR, TEXT_LIGHT, BACKGROUND_COLOR } from "../../utils/colors";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    marginBottom: 20,
  },
  imageContainer: {},
  image: {
    width: width,
    height: width * 0.9,
  },
  textContainer: {
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 24,
    fontFamily: "HostGrotesk-Bold",
    marginVertical: 10,
    color: TEXT_COLOR,
  },
  price: {
    fontSize: 20,
    fontFamily: "HostGrotesk-Medium",
    color: "white",
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginBottom: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 8,
  },

  description: {
    fontSize: 16,
    fontFamily: "HostGrotesk-Regular",
    textAlign: "justify",
    color: TEXT_LIGHT,
    paddingHorizontal: 5,
  },
  thumbnailContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginHorizontal: 5,
    opacity: 0.5,
  },
  activeThumbnail: {
    borderColor: PRIMARY_COLOR,
    borderWidth: 2,
    opacity: 1,
  },
});
