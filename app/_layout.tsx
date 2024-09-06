import { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="Login" options={{ title: "login" }} />
        <Stack.Screen name="index" options={{ title: "onboarding" }} />
      </Stack>
    </QueryClientProvider>
  );
}
