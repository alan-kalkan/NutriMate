import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "./constants";
import TabNavigator from "../components/TabNavigator";
import Index from "../index";
import Register from "../screens/Register";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export default function AppNav() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="index" component={Index} />
            <Stack.Screen options={{ headerShown: false }} name={ROUTES.REGISTER} component={Register} />
            <Stack.Screen name={ROUTES.HOME} component={Home} />
        </Stack.Navigator>
    );
}