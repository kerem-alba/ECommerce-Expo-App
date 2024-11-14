import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, BACKGROUND_COLOR, DARK_COLOR } from "../../utils/colors";

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: PRIMARY_COLOR,
  },
  title: {
    fontSize: 18,
    color: BACKGROUND_COLOR,
    fontFamily: "HostGrotesk-Bold",
    marginLeft: 15,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 15,
    color: BACKGROUND_COLOR,
  },
  cartIconContainer: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    right: -12,
    top: -5,
    backgroundColor: DARK_COLOR,
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: BACKGROUND_COLOR,
    fontSize: 10,
    fontFamily: "HostGrotesk-Medium",
  },
});
