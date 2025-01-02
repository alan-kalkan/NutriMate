import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "./constants";
import TabNavigator from "../components/TabNavigator";
import Index from "../index";
import Register from "../screens/Register";
import Home from "../screens/Home";
import ReviewScreen from "../screens/ReviewScreen";
import ProductDetails from "../screens/ProductDetails";
import { ProductList } from "../components/ProductList";

type HomeStackParamList = {
  [ROUTES.PRODUCT_LIST]: undefined;
  [ROUTES.PRODUCT_DETAILS]: { productId: string };
  [ROUTES.SETTINGS]: undefined;
};

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.PRODUCT_LIST}
    >
      <HomeStack.Screen name={ROUTES.PRODUCT_LIST} component={ProductList} />
      <HomeStack.Screen name={ROUTES.PRODUCT_DETAILS} component={ProductDetails} />
    </HomeStack.Navigator>
  );
}

export default function AppNav() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="index" component={Index} />
            <Stack.Screen options={{ headerShown: false }} name={ROUTES.REGISTER} component={Register} />
            <Stack.Screen name={ROUTES.HOME} component={HomeNavigator} />
            <Stack.Screen name={ROUTES.REVIEW_FORM} component={ReviewScreen} initialParams={{ productId: '', userId: '' }} />
            <Stack.Screen name={ROUTES.PRODUCT_DETAILS} component={ProductDetails} initialParams={{ productId: '', userId: '' }} />
        </Stack.Navigator>
    );
}