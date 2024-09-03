import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Column from "@/components/Column";
import globalStyles from "@/utils/styles";
import Button from "@/components/Button";
import Bulle from "@/features/onBoarding/Bulle";
import Row from "@/components/Row";
import Content from "@/features/onBoarding/content";

export default function Onboarding() {
  const [currentPage, setCurrentPage] = useState(0);

  const transitionToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Column
        verticalPosition="flex-end"
        horizontalPosition="center"
        style={styles.column}
      >
        {currentPage === 0 && (
          <Content
            title="Tous les Pokémon regroupés en un seul endroit"
            text="Accédez à une vaste liste de Pokémon de toutes les générations créées par Nintendo"
            image="twoCharacter.png"
          />
        )}
        {currentPage === 1 && (
          <Content
            title="Garde ta Pokédex à jour"
            text="Inscris-toi et garde ton profil, tes Pokémon favoris, tes paramètres et bien plus encore sauvegardés dans l'application, même sans connexion Internet."
            image="womenCharacter.png"
          />
        )}
        <Row verticalPosition="center" horizontalPosition="center" gap={8}>
          <Bulle isOpen={currentPage === 0} />
          <Bulle isOpen={currentPage === 1} />
        </Row>
        <Button
          title={currentPage ? "Continuer" : "Commencer"}
          variant="primary"
          onPress={() => transitionToPage(currentPage === 0 ? 1 : 0)}
          link={currentPage ? "/Login" : undefined}
        />
      </Column>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    width: "100%",
  },
});
