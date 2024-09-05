import Column from "@/components/Column";
import ThemedText from "@/components/ThemedText";
import { StyleSheet, ImageBackground } from "react-native";
import { Region } from "@/constants/Region";
import { regionName } from "@/utils/types/pokemon";

type Props = {
  name: regionName;
  number: number;
};

export default function RegionCard({ name, number }: Props) {
  const imageRegion = Region[name] ?? Region.kanto;

  return (
    <ImageBackground source={imageRegion} style={styles.backgroundImage}>
      <Column verticalPosition={"center"} horizontalPosition={"flex-start"} gap={5}>
        <ThemedText variant="body3" color={"white"}>
          {name}
        </ThemedText>
        <ThemedText variant="text" color={200}>
          {number}° Génération
        </ThemedText>
      </Column>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: "cover",
    justifyContent: "center",
    padding: 30,
    borderRadius: 15,
    overflow: "hidden", 
  },
});
