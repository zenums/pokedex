import { useEffect, useState } from "react";
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import PokemonCard from "@/components/PokemonCard";
import { Pokemon } from "@/utils/types/pokemon";
import globalStyles from "@/utils/styles";
import SearchBar from "@/components/SearchBar";
import Column from "@/components/Column";
import { useThemeColors } from "@/hooks/useThemeColors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";
import { get } from "@/services/axios";

export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const { data, isFetching, error } = useQuery({
    queryKey: ["pokemon"],
    queryFn: () => get("pokemon"),
  });

  useEffect(() => {
    if (data) {
      setPokemon(data);
      setFilteredPokemon(data);
    }
  }, [data]);

  const colors = useThemeColors();

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (imagesLoaded === filteredPokemon.length) {
      setAllImagesLoaded(true);
      console.log("All images loaded");
    }
  }, [imagesLoaded, filteredPokemon]);

  const handleSearch = (searchText: string | number) => {
    if (searchText === "") {
      setFilteredPokemon(pokemon);
      return;
    }

    const filteredData = pokemon.filter(
      (p: Pokemon) =>
        (typeof searchText === "string" &&
          p.name.toLowerCase().includes(searchText.toLowerCase())) ||
        p.id.toString().includes(searchText.toString())
    );

    setFilteredPokemon(filteredData);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[globalStyles.safeArea]}>
        <Column
          verticalPosition="flex-start"
          horizontalPosition="center"
          gap={35}
          style={{ flex: 1 }}
        >
          <SearchBar onSearch={handleSearch} />
          <FlatList
            contentContainerStyle={styles.list}
            data={filteredPokemon}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <PokemonCard
                name={item.name}
                id={item.id}
                number={item.number}
                types={item.types}
                onImageLoad={handleImageLoad}
              />
            )}
            ListFooterComponent={
              isFetching || !allImagesLoaded ? (
                <ActivityIndicator color={colors.Azul} />
              ) : null
            }
          />
        </Column>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
    gap: 10,
    paddingBottom: 20,
  },
});
