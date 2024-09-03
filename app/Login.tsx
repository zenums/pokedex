import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import Column from "@/components/Column";
import globalStyles from "@/utils/styles";
import Button from "@/components/Button";
import Content from "@/features/onBoarding/content";
import Row from "@/components/Row";
import { useThemeColors } from "@/hooks/useThemeColors";

export default function Login() {
  const colors = useThemeColors();

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Row
        verticalPosition="center"
        horizontalPosition="flex-end"
        gap={8}
        style={styles.row}
      >
        <Button
          title="Passer"
          variant="secondary"
          style={{ flex: 0 }}
          styleText={{ color: colors.black }}
          link="/Home"
        />
        <Image source={require("@/assets/icon/arrow.png")} />
      </Row>
      <Column
        verticalPosition="flex-end"
        horizontalPosition="center"
        style={styles.column}
      >
        <Content
          title="Es-tu prêt pour cette aventure ?"
          text="Il suffit de créer un compte et de commencer à explorer le monde des Pokémon dès aujourd'hui !"
          image="twoCharacter_login.png"
        />
        <Button title="Créer un compte" variant="primary" />
        <Button title="J'ai déjà un compte" variant="secondary" />
      </Column>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    width: "100%",
  },
  row: {
    position: "absolute",
    top: 60,
    right: 20,
  },
});
