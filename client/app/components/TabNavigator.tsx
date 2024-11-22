import React from "react";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Settings from "../screens/Settings";
import { ROUTES, TAB_BAR_HEIGHT } from "../navigation/constants";
import { TAB_ICONS } from "../navigation/tabIcons";
import Account from "../screens/Account";
import Favorites from "../screens/Favorites";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
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
      })}
    >
      <Tab.Screen name={ROUTES.HOME} component={Home} />
      <Tab.Screen name={ROUTES.FAVORITES} component={Favorites} />
      <Tab.Screen name={ROUTES.SEARCH} component={Search} />
      <Tab.Screen name={ROUTES.ACCOUNT} component={Account} />
      <Tab.Screen name={ROUTES.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
}