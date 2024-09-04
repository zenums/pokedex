import React from "react";
import { View, Image, StyleSheet } from "react-native";
import icons from "@/constants/icons";
import { typesPokemon } from "@/utils/types/pokemon";
import Row from "./Row";
import ThemedText from "./ThemedText";

type Props = {
  name: typesPokemon;
  color: string;
};

export default function Tag({ name, color }: Props) {
  const iconSource = icons[name] || null;

  return (
    <Row
      style={[styles.tag, { backgroundColor: `rgba(${color}, 0.1)` }]}
      verticalPosition={"center"}
      horizontalPosition={"center"}
      gap={10}
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
    padding: 7,
    borderRadius: 999,
    marginRight: 5,
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
