import { StyleSheet, View, Image, TextInput } from "react-native";
import { useState } from "react";
import Row from "./Row";
import { useThemeColors } from "@/hooks/useThemeColors";

type Props = {
  onSearch: (text: string | number) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [searchText, setSearchText] = useState<string | number>("");
  const colors = useThemeColors();

  const handleSearch = (text: string | number) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <Row
      style={[styles.container, { borderColor: colors["200"] }]}
      verticalPosition={"center"}
      gap={10}
      horizontalPosition={"space-between"}
    >
      <Image
        source={require("../assets/icon/search.png")}
        style={styles.icon}
      />
      <TextInput
        value={searchText.toString()}
        onChangeText={handleSearch}
        placeholder="Rechercher un Pokémon..."
        style={styles.input}
      />
    </Row>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
  },
});
