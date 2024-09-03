import { Link } from "expo-router";
import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  safeArea: {
    position: "relative",
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  column: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    textAlign: "center",
  },
});

export default globalStyles;
