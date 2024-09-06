import { StyleSheet, Image } from "react-native";
import Column from "./Column";
import Row from "./Row";
import ThemedText from "./ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";

type Props = {
  name: string;
  image: any;
  value: number | string;
};

export default function TagAbility({ name, image, value }: Props) {
  const colors = useThemeColors();

  const isNumber = typeof value === "number";

  return (
    <Column
      verticalPosition={"center"}
      horizontalPosition={"flex-start"}
      gap={5}
      style={{ width: "50%" }}
    >
      <Row
        verticalPosition={"center"}
        horizontalPosition={"flex-start"}
        gap={5}
      >
        <Image source={image} style={styles.icon} />
        <ThemedText variant="body4" color={600}>
          {name}
        </ThemedText>
      </Row>
      <Column
        verticalPosition={"center"}
        horizontalPosition={"center"}
        gap={5}
        style={[styles.tag, { borderColor: colors["200"] }]}
      >
        <ThemedText variant="body4" style={{ textTransform: "capitalize" }}>
          {isNumber ? value / 10 : value}
        </ThemedText>
      </Column>
    </Column>
  );
}
const styles = StyleSheet.create({
  tag: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
