import { StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  children: React.ReactNode;
  verticalPosition: "flex-start" | "center" | "flex-end";
  horizontalPosition: "flex-start" | "center" | "flex-end";
  gap?: number;
  style?: ViewStyle | ViewStyle[];
};

export default function Column({
  verticalPosition,
  horizontalPosition,
  style,
  gap = 16,
  children,
  ...rest
}: Props) {
  const dynamicStyle = {
    justifyContent: verticalPosition,
    gap: gap,
    alignItems: horizontalPosition,
  };

  return (
    <View style={[styles.column, dynamicStyle, style]} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    flexDirection: "column",
  },
});
