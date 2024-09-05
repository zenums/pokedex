import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 15,
    gap: 10,
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
