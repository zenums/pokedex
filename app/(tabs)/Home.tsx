import { useEffect, useState } from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonCard from "@/components/PokemonCard";
import { useFetchQuery } from "@/hooks/useFecthQuery";
import { getPokemonId } from "@/utils/pokemon";
import { Pokemon } from "@/utils/types/pokemon";

export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  const { data } = useFetchQuery("pokemon", "pokemon");

  useEffect(() => {
    const fetchPokemonWithTypes = async () => {
      if (!data?.results) return;

      const pokemonWithTypes = await Promise.all(
        data.results.map(async (item: Pokemon) => {
          const details = await fetch(item.url).then((res) => res.json());

          return {
            name: item.name,
            id: getPokemonId(item.url),
            url: item.url,
            types: details.types.map(
              (type: { type: { name: string } }) => type.type.name
            ),
          };
        })
      );

      setPokemon(pokemonWithTypes);
    };

    fetchPokemonWithTypes();
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={pokemon}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PokemonCard
            name={item.name}
            id={item.id}
            types={item.types}
            url={item.url}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  list: {
    gap: 10,
  },
});
