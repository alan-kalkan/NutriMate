import React from "react";
import { ProductList } from "../components/ProductList";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  
  return ( <>
  <ProductList navigation={navigation} /> 
  </>
  )
}
