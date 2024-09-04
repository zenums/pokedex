import { StyleSheet, Text, View, Image } from "react-native";
import ThemedText from "./ThemedText";
import Column from "./Column";
import Row from "./Row";
import { Pokemon, typesPokemon } from "@/utils/types/pokemon";
import Tag from "./Tag";
import { TypeStyles } from "@/constants/pokemon";

export default function PokemonCard({ name, id, types, url }: Pokemon) {
  const primaryType: typesPokemon = types[0];
  const typeStyle = TypeStyles[primaryType] || {};

  return (
    <Row
      verticalPosition={"center"}
      horizontalPosition={"space-between"}
      style={[styles.row, { backgroundColor: `rgba(${typeStyle.color}, 0.1)` }]}
    >
      <Column
        verticalPosition={"center"}
        horizontalPosition={"flex-start"}
        gap={0}
        style={styles.column}
      >
        <ThemedText variant={"body3"}>N°{id}</ThemedText>
        <ThemedText variant={"body2"} style={{ textTransform: "capitalize" }}>
          {name}
        </ThemedText>
        <Row
          verticalPosition={"center"}
          horizontalPosition={"flex-start"}
          gap={5}
        >
          {types.map((type) => (
            <Tag key={type} name={type} color={typeStyle.color} />
          ))}
        </Row>
      </Column>
      <View
        style={[
          styles.blockImage,
          { backgroundColor: `rgba(${typeStyle.color}, 1)` },
        ]}
      >
        <Image
          source={{
            uri: `https://img.pokemondb.net/sprites/black-white/normal/${name}.png`,
          }}
          width={95}
          height={95}
        />
      </View>
    </Row>
  );
}

const styles = StyleSheet.create({
  row: {
    borderRadius: 15,
    overflow: "hidden",
  },
  column: {
    padding: 14,
  },
  blockImage: {
    padding: 10,
    width: 150,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
