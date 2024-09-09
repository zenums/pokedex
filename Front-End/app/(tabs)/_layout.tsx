import { StyleSheet, Image } from "react-native";
import { Tabs } from "expo-router";
import { useThemeColors } from "@/hooks/useThemeColors";
import ThemedText from "@/components/ThemedText";

export default function TabsLayout() {
  const colors = useThemeColors();

  const homeIcon = require("@/assets/icon/tabs/pokeball.png");
  const mapIcon = require("@/assets/icon/tabs/region.png");
  const heartIcon = require("@/assets/icon/tabs/like.png");
  const settingsIcon = require("@/assets/icon/tabs/settings.png");

  const homeIconGray = require("@/assets/icon/tabs/pokeball_gray.png");
  const mapIconGray = require("@/assets/icon/tabs/region_gray.png");
  const heartIconGray = require("@/assets/icon/tabs/like_gray.png");
  const settingsIconGray = require("@/assets/icon/tabs/settings_gray.png");

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: [
          styles.tabBarStyle,
          {
            backgroundColor: colors.white,
            borderTopColor: colors["100"],
          },
        ],
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <ThemedText variant="text" color="Azul">
                Pokédex
              </ThemedText>
            ) : null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={homeIcon} style={styles.icon} />
            ) : (
              <Image source={homeIconGray} style={styles.icon} />
            ),
        }}
      />
      <Tabs.Screen
        name="Region"
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <ThemedText variant="text" color="Azul">
                Régions
              </ThemedText>
            ) : null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={mapIcon} style={styles.icon} />
            ) : (
              <Image source={mapIconGray} style={styles.icon} />
            ),
        }}
      />
      <Tabs.Screen
        name="Like"
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <ThemedText variant="text" color="Azul">
                Favoris
              </ThemedText>
            ) : null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={heartIcon} style={styles.icon} />
            ) : (
              <Image source={heartIconGray} style={styles.icon} />
            ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <ThemedText variant="text" color="Azul">
                Paramètres
              </ThemedText>
            ) : null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={settingsIcon} style={styles.icon} />
            ) : (
              <Image source={settingsIconGray} style={styles.icon} />
            ),
        }}
      />
      <Tabs.Screen
        name="pokemon/[id]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: 1,
    paddingTop: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
