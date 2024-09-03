import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          "BergenText-Bold": require("@/assets/fonts/BergenText-Bold.otf"),
          "BergenText-Regular": require("@/assets/fonts/BergenText-Regular.otf"),
          "BergenText-SemiBold": require("@/assets/fonts/BergenText-SemiBold.otf"),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    />
  );
}
