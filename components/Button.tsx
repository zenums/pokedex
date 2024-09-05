import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Href, useRouter } from "expo-router";
import ThemedText from "./ThemedText";

type Props = TouchableOpacityProps & {
  variant?: "primary" | "secondary" | "disabled";
  title: string;
  link?: Href<string>;
  disabled?: boolean;
  styleText?: object;
};

export default function Button({
  variant = "primary",
  title,
  disabled = false,
  link,
  styleText,
  ...rest
}: Props) {
  const colors = useThemeColors();
  const router = useRouter();

  const buttonStyle = [
    styles.button,
    variant === "primary" && { backgroundColor: colors.Azul },
    variant === "secondary" && { backgroundColor: "transparent" },
    variant === "disabled" && { backgroundColor: colors["200"] },
  ];

  const textStyle = [
    variant === "primary" && { color: colors.white, padding: 15 },
    variant === "secondary" && { color: colors.Azul, padding: 0 },
    variant === "disabled" && { color: colors["400"] },
  ];

  const handlePress = () => {
    if (link) router.push(link);
  };

  return (
    <TouchableOpacity
      style={buttonStyle}
      disabled={disabled}
      {...rest}
      onPress={link ? handlePress : rest.onPress}
    >
      <ThemedText variant="body4" style={[textStyle, styleText]}>
        {title}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 99,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
