import Row from "@/components/Row";
import Column from "@/components/Column";
import { iconsOutline } from "@/constants/icons";
import { TypeStyles } from "@/constants/pokemon";
import { useFetchQuery } from "@/hooks/useFecthQuery";
import { useThemeColors } from "@/hooks/useThemeColors";
import { PokemonType, typesPokemon } from "@/utils/types/pokemon";
import { useLocalSearchParams } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import ThemedText from "@/components/ThemedText";
import {
  cleanDescription,
  getGenderPercentage,
  getNumPokemon,
} from "@/utils/pokemon";
import Tag from "@/components/Tag";
import TagAbility from "@/components/TagAbility";
import {
  StyleSheet,
  Image,
  View,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import GenreBar from "@/features/pokemon/GenreBar";
import { useEffect, useState } from "react";
import { w } from "@tanstack/query-core/build/legacy/hydration-DhBHwtrO";

export default function Pokemon() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const { data, isLoading } = useFetchQuery(`pokemon/${id}`);
  const { data: species } = useFetchQuery(`pokemon-species/${id}`);

  const [weakness, setWeakness] = useState<typesPokemon[]>([]);

  useEffect(() => {
    const fetchWeaknesses = async () => {
      if (data?.types.length > 0) {
        const pokemonTypes: typesPokemon[] = data.types.map(
          (type: { type: { name: typesPokemon } }) => type.type.name
        );

        const weaknessPromises = data.types.map(
          async (type: { type: { name: typesPokemon } }) => {
            const response = await fetch(
              `https://pokeapi.co/api/v2/type/${type.type.name}`
            );
            const typeData = await response.json();

            return typeData.damage_relations.double_damage_from
              .map((damageType: { name: typesPokemon }) => damageType.name)
              .filter(
                (weaknessType: typesPokemon) =>
                  !pokemonTypes.includes(weaknessType)
              );
          }
        );

        const weaknessesArray = await Promise.all(weaknessPromises);
        const combinedWeaknesses = weaknessesArray.flat();

        const uniqueWeaknesses = [...new Set(combinedWeaknesses)];
        setWeakness(uniqueWeaknesses);
      }
    };

    fetchWeaknesses();
  }, [data]);

  const primaryType: typesPokemon = data?.types[0].type.name;
  const typeStyle = TypeStyles[primaryType] || {};
  const colors = useThemeColors();
  const iconOutline = iconsOutline[primaryType];

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={[styles.container]}>
          <View
            style={[
              styles.header,
              { backgroundColor: `rgba(${typeStyle.color}, 0.8)` },
            ]}
          >
            <Row
              verticalPosition={"center"}
              horizontalPosition={"space-between"}
              style={styles.rowHeader}
            >
              <Pressable
                onPress={() => navigation.goBack()}
                style={styles.pressable}
              >
                <Image source={require("@/assets/icon/angle_left.png")} />
              </Pressable>
              <Pressable
                onPress={() => navigation.goBack()}
                style={[styles.pressable, { alignItems: "flex-end" }]}
              >
                <Image source={require("@/assets/icon/PokeHeart.png")} />
              </Pressable>
            </Row>
            <Image
              source={iconOutline}
              style={styles.imageOutline}
              resizeMode="contain"
            />
          </View>
          <Image
            source={{
              uri: `https://projectpokemon.org/images/normal-sprite/${data?.name}.gif`,
            }}
            style={styles.gif}
            resizeMode="contain"
          />
        </View>
        <Column
          verticalPosition={"center"}
          horizontalPosition={"flex-start"}
          style={styles.containerInfo}
        >
          <Column
            verticalPosition={"center"}
            horizontalPosition={"flex-start"}
            gap={20}
          >
            <Column
              verticalPosition={"center"}
              horizontalPosition={"flex-start"}
              gap={0}
            >
              <ThemedText
                variant="body2"
                style={{ textTransform: "capitalize" }}
              >
                {data?.name}
              </ThemedText>
              <ThemedText variant="body4" color={800}>
                N°{getNumPokemon(url)}
              </ThemedText>
            </Column>

            <Row
              verticalPosition={"center"}
              horizontalPosition={"flex-start"}
              gap={5}
            >
              {data?.types.map((type: PokemonType) => (
                <Tag
                  key={type.type.name}
                  name={type.type.name}
                  color={TypeStyles[type.type.name]?.color ?? typeStyle.color}
                />
              ))}
            </Row>
            <ThemedText variant="text" color={700}>
              {cleanDescription(species?.flavor_text_entries[0]?.flavor_text)}
            </ThemedText>
          </Column>
          <Column
            verticalPosition={"center"}
            horizontalPosition={"flex-start"}
            gap={10}
            style={[styles.rowAbility, { borderColor: colors["100"] }]}
          >
            <Row
              verticalPosition={"center"}
              horizontalPosition={"flex-start"}
              gap={10}
              style={{ width: "100%" }}
            >
              <TagAbility
                name="Weight"
                value={data?.weight}
                image={require("@/assets/icon/weight.png")}
              />
              <TagAbility
                name="Heights"
                value={data?.height}
                image={require("@/assets/icon/height.png")}
              />
            </Row>
            <Row
              verticalPosition={"center"}
              horizontalPosition={"flex-start"}
              gap={10}
              style={{ width: "100%" }}
            >
              <TagAbility
                name="Category"
                value={data?.height}
                image={require("@/assets/icon/category.png")}
              />
              <TagAbility
                name="Ability"
                value={data?.abilities[0].ability.name}
                image={require("@/assets/icon/tabs/pokeball_gray.png")}
              />
            </Row>
          </Column>
          <Column
            verticalPosition={"center"}
            horizontalPosition={"center"}
            gap={10}
            style={{ width: "100%" }}
          >
            <ThemedText variant="body4" color={600}>
              Gender
            </ThemedText>
            <GenreBar percent={getGenderPercentage(species?.gender_rate)} />
          </Column>
          <Column
            verticalPosition={"center"}
            horizontalPosition={"flex-start"}
            gap={10}
            style={{ width: "100%", marginTop: 20 }}
          >
            <ThemedText variant="body3" color={700}>
              weakness
            </ThemedText>
            <Row
              verticalPosition={"center"}
              horizontalPosition={"flex-start"}
              style={{ flexWrap: "wrap" }}
            >
              {weakness.map((type: typesPokemon) => (
                <Tag
                  key={type}
                  name={type}
                  color={TypeStyles[type]?.color ?? typeStyle.color}
                  style={{ width: 100 }}
                />
              ))}
            </Row>
          </Column>
        </Column>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  pressable: {
    width: 100,
    height: 100,
  },
  header: {
    width: "100%",
    height: "100%",
    padding: 16,
    borderBottomRightRadius: 9999,
    borderBottomLeftRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
  },
  rowHeader: {
    width: "100%",
    position: "absolute",
    top: 20,
  },
  imageOutline: {
    width: "70%",
    height: "70%",
  },
  gif: {
    width: "60%",
    height: "60%",
    position: "absolute",
    bottom: -30,
  },
  containerInfo: {
    padding: 20,
    paddingTop: 50,
  },
  rowAbility: {
    borderTopWidth: 1,
    paddingTop: 20,
  },
});
