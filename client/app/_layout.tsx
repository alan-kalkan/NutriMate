import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Index from "./index";
import { ROUTES } from "./navigation/constants";
import Register from "./screens/Register";
import Home from "./screens/Home";
import TabNavigator from "./components/TabNavigator";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="App" component={TabNavigator} />
      <Stack.Screen name="index" component={Index} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen name={ROUTES.HOME} component={Home} />
    </Stack.Navigator>
  );
}
