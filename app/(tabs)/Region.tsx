import ThemedText from "@/components/ThemedText";
import RegionCard from "@/features/region/RegionCard";
import { useFetchQuery } from "@/hooks/useFecthQuery";
import globalStyles from "@/utils/styles";
import { ActivityIndicator, StyleSheet, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import type { Region as typeRegion } from "@/utils/types/pokemon";
import { useThemeColors } from "@/hooks/useThemeColors";

export default function Region() {
  const { data, isFetching } = useFetchQuery("region?limit=8");
  const colors = useThemeColors();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyles.safeArea}>
        <ThemedText variant="body2">Régions</ThemedText>
        <FlatList
          contentContainerStyle={styles.list}
          data={data?.results}
          renderItem={({
            index,
            item,
          }: {
            item: typeRegion;
            index: number;
          }) => (
            <RegionCard name={item.name} number={index + 1} />
          )}
          keyExtractor={(item) => item.name}
          ListFooterComponent={
            isFetching ? <ActivityIndicator color={colors.Azul} /> : null
          }
        />
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
