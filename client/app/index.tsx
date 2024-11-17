import { config } from "@tamagui/config";
import React, { useEffect, useState } from "react";

import { TamaguiProvider, createTamagui } from "tamagui";

import Home from "./screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./screens/Settings";
import Favorites from "./screens/Favorites";
import Account from "./screens/Account";
import Search from "./screens/Search"; 
import { ROUTES } from "./navigation/constants";
import { TAB_ICONS } from "./navigation/tabIcons";
import * as SplashScreen from 'expo-splash-screen';
import CircularText from "./components/CircularText";
const tamaguiConfig = createTamagui(config);
SplashScreen.preventAutoHideAsync();

declare module "@tamagui/core" {
}
const Tab = createBottomTabNavigator();

export default function Index() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.hideAsync();
      setIsReady(true);
    }
    prepare();
  }, []);

  if (!isReady) {
    return <CircularText />;
  };

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Tab.Navigator
        initialRouteName={ROUTES.HOME}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            const strokeWidth = focused ? 2 : 1;
            const Icon = TAB_ICONS[route.name as keyof typeof TAB_ICONS];
            return <Icon size={size} color={color} strokeWidth={strokeWidth} />;
          },
          tabBarActiveTintColor: "aqua",
          tabBarInactiveTintColor: "gray",
        })}>
        <Tab.Screen name={ROUTES.HOME} component={Home} />
        <Tab.Screen name={ROUTES.FAVORITES} component={Favorites} />
        <Tab.Screen name={ROUTES.SEARCH} component={Search} />
        <Tab.Screen name={ROUTES.ACCOUNT} component={Account} />
        <Tab.Screen name={ROUTES.SETTINGS} component={Settings} />
      </Tab.Navigator>
    </TamaguiProvider>
  );
}
