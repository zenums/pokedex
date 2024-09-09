import Row from "@/components/Row";
import ThemedText from "@/components/ThemedText";
import { StyleSheet, View, Image } from "react-native";

type Props = {
  percent: {
    male: number;
    female: number;
  };
};

export default function GenreBar({ percent }: Props) {
  console.log("percent", percent);

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <View
          style={[styles.percentMale, { width: `${percent.male}%` }]}
        ></View>
        <View
          style={[styles.percentFemale, { width: `${percent.female}%` }]}
        ></View>
      </View>
      <Row
        verticalPosition={"center"}
        horizontalPosition={"flex-start"}
        gap={5}
        style={[styles.row, { left: 0 }]}
      >
        <Image source={require("@/assets/icon/male.png")} />
        <ThemedText variant="text" color={700}>
          {percent.male}%
        </ThemedText>
      </Row>
      <Row
        verticalPosition={"center"}
        horizontalPosition={"flex-start"}
        gap={5}
        style={[styles.row, { right: 0 }]}
      >
        <Image source={require("@/assets/icon/female.png")} />
        <ThemedText variant="text" color={700}>
          {percent.female}%
        </ThemedText>
      </Row>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    gap: 5,
  },
  bar: {
    width: "100%",
    height: 20,
    borderRadius: 99,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  percentMale: {
    height: "100%",
    backgroundColor: "#2551C3",
  },
  percentFemale: {
    height: "100%",
    width: "50%",
    backgroundColor: "#FF7596",
  },
  row: {
    position: "absolute",
    bottom: -22,
  },
});
