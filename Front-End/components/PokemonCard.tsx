import { StyleSheet, View, Image,TouchableOpacity } from "react-native";
import ThemedText from "./ThemedText";
import Column from "./Column";
import Row from "./Row";
import { Pokemon, typesPokemon } from "@/utils/types/pokemon";
import Tag from "./Tag";
import { TypeStyles } from "@/constants/pokemon";
import { useThemeColors } from "@/hooks/useThemeColors";
import { iconsOutline } from "@/constants/icons";
import { Href, useRouter } from "expo-router";

type Props = Pokemon & {
  onImageLoad: () => void;
};

export default function PokemonCard({
  name,
  id,
  types,
  number,
  onImageLoad,
}: Props) {
  const primaryType: typesPokemon = types[0];
  const typeStyle = TypeStyles[primaryType] || {};

  const colors = useThemeColors();
  const iconOutline = iconsOutline[primaryType];

  const router = useRouter();

  const onPress = () => {
    router.push(`/pokemon/${id}` as Href);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.link}>
      <Row
        verticalPosition={"center"}
        horizontalPosition={"space-between"}
        style={[
          styles.row,
          { backgroundColor: `rgba(${typeStyle.color}, 0.1)` },
        ]}
      >
        <Column
          verticalPosition={"center"}
          horizontalPosition={"flex-start"}
          gap={5}
          style={styles.column}
        >
          <ThemedText variant={"body4"} style={{ color: colors["800"] }}>
            N°{number}
          </ThemedText>
          <ThemedText variant={"body3"} style={{ textTransform: "capitalize" }}>
            {name}
          </ThemedText>
          <Row
            verticalPosition={"center"}
            horizontalPosition={"flex-start"}
            gap={5}
          >
            {types.map((type) => (
              <Tag
                key={type}
                name={type}
                color={TypeStyles[type]?.color ?? typeStyle.color}
              />
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
            width={100}
            height={100}
            style={{ zIndex: 2 }}
            onLoad={onImageLoad}
          />
          <Image
            source={iconOutline}
            style={styles.outline}
            resizeMode="contain"
            onLoad={onImageLoad}
          />
        </View>
      </Row>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    borderRadius: 15,
    overflow: "hidden",
    height: 120,
    width: "100%",
  },
  row: {
    width: "100%",
  },
  column: {
    padding: 14,
  },
  blockImage: {
    padding: 10,
    width: 150,
    height: "100%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  outline: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
