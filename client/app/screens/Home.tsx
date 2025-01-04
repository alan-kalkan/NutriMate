import React from "react";
import { ProductList } from "../components/ProductList";
import { useNavigation } from "@react-navigation/native";
import ProductSubmit from "../components/ProductSubmit";

export default function Home() {
  const navigation = useNavigation();
  
  return ( <>
  <ProductList navigation={navigation} /> 
  <ProductSubmit />
  </>
  )
}
