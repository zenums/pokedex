import { StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  children: React.ReactNode;
  verticalPosition: "flex-start" | "center" | "flex-end";
  horizontalPosition: "flex-start" | "center" | "flex-end";
  gap?: number;
  style?: ViewStyle;
};

export default function Row({
  verticalPosition,
  horizontalPosition,
  style,
  gap = 16,
  children,
  ...rest
}: Props) {
  const dynamicStyle = {
    justifyContent: horizontalPosition,
    gap: gap,
    alignItems: verticalPosition,
  };

  return (
    <View style={[styles.row, dynamicStyle, style]} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});
