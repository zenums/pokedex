import React from "react";
import { View, Image, StyleSheet, ViewStyle } from "react-native";
import { icons } from "@/constants/icons";
import { typesPokemon } from "@/utils/types/pokemon";
import Row from "./Row";
import ThemedText from "./ThemedText";

type Props = {
  name: typesPokemon;
  color: string;
  style?: ViewStyle | ViewStyle[];
};

export default function Tag({ name, color, style }: Props) {
  const iconSource = icons[name] || null;

  return (
    <Row
      style={[styles.tag, { backgroundColor: `rgba(${color}, 1)` }, style]}
      verticalPosition={"center"}
      horizontalPosition={"flex-start"}
      gap={6}
    >
      <View style={[styles.blocIcon]}>
        {iconSource && (
          <Image source={iconSource} style={styles.icon} resizeMode="contain" />
        )}
      </View>
      <ThemedText style={styles.text} variant={"text"}>
        {name}
      </ThemedText>
    </Row>
  );
}

const styles = StyleSheet.create({
  tag: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    borderRadius: 999,
  },
  blocIcon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 13,
    height: 13,
    borderRadius: 50,
    padding: 10,
  },
  icon: {
    width: 13,
    height: 13,
  },
  text: {
    textTransform: "capitalize",
  },
});
