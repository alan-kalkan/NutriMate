import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Index from "./index";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="index" component={Index} />
    </Stack.Navigator>
  );
}
