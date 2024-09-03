import { useThemeColors } from "@/hooks/useThemeColors";
import { Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import * as Font from 'expo-font';

type Props = {
  variant: keyof typeof styles;
  color?: keyof (typeof Colors)["light"];
  children: React.ReactNode;
  style?: object;
};

export default function ThemedText({
  variant,
  style,
  color = "black",
  children,
  ...rest
}: Props) {
  const colors = useThemeColors();

  return (
    <Text
      style={[
        styles[variant ?? "headline"],
        { color: colors[color ?? "Vermelho"] },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  headline: {
    fontSize: 26,
    lineHeight: 35,
    fontFamily: 'BergenText-Bold',
  },
  body2: {
    fontSize: 26,
    fontFamily: 'BergenText-SemiBold',
  },
  body3: {
    fontSize: 18,
    fontFamily: 'BergenText-SemiBold',
  },
  text: {
    fontSize: 14,
    fontFamily: 'BergenText-Regular',
  },
});
