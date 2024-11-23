import React from "react";
import { ProductList } from "../components/ProductList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "./ProductDetails";
import { ROUTES } from "../navigation/constants";

const HomeStack = createNativeStackNavigator();

export default function Home() {

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
