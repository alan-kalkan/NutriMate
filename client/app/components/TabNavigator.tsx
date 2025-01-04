import React from "react";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Settings from "../screens/Settings";
import { ROUTES } from "../navigation/constants";
import { TAB_ICONS } from "../navigation/tabIcons";
import Account from "../screens/Account";
import Favorites from "../screens/Favorites";
import Authentication from "../screens/Authentication";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "tamagui";
import { useAuth } from "../context/AuthContext";
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const { isLoggedIn } = useAuth();

  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 90,
        },
        tabBarIcon: ({ focused, color, size }) => {
          const strokeWidth = focused ? 2 : 1;
          const Icon = TAB_ICONS[route.name as keyof typeof TAB_ICONS]; 
          return (
            <View marginTop={10}>
              <Icon size={size} color={color} strokeWidth={strokeWidth} width={30} height={30}/>
            </View>
          );
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#757575",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          paddingTop: 10,
        },
      })}
    >
      <Tab.Screen name={ROUTES.HOME} component={Home} />
      <Tab.Screen name={ROUTES.FAVORITES} component={Favorites} />
      <Tab.Screen name={ROUTES.SEARCH} component={Search} />
      {isLoggedIn ? (
        <Tab.Screen name={ROUTES.ACCOUNT} component={Account} />
      ) : (
        <Tab.Screen name={ROUTES.AUTHENTIFICATION} component={Authentication} />
      )}
      <Tab.Screen name={ROUTES.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
}