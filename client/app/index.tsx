import React, { useEffect, useState } from "react";

import { TamaguiProvider } from "tamagui";

import Home from "./screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./screens/Settings";
import Favorites from "./screens/Favorites";
import Account from "./screens/Account";
import Search from "./screens/Search"; 
import { ROUTES, TAB_BAR_HEIGHT } from "./navigation/constants";
import { TAB_ICONS } from "./navigation/tabIcons";
import * as SplashScreen from 'expo-splash-screen';
import CircularText from "./components/CircularText";
import configuration from "./tamagui.config";
// import ProductDetails from "./screens/ProductDetails";

declare module "@tamagui/core" {
}
const Tab = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync();

// const Stack = createNativeStackNavigator({
//   screens: {
//     Home: {
//       screen: ProductDetails,
//       options: ({ route, navigation, theme }) => ({
//         title: route.params.productId,
//       }),
//     },
//   },
// });

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
    <TamaguiProvider config={configuration}>
      <Tab.Navigator
        initialRouteName={ROUTES.HOME}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            height: TAB_BAR_HEIGHT,
          },
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
        {/* <Tab.Screen name={ROUTES.PRODUCT_DETAILS} component={ProductDetails} /> */}
      </Tab.Navigator>
    </TamaguiProvider>
  );
}
