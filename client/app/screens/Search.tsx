import { Text, Input, View, Button } from "tamagui";
import React, { useEffect, useState } from "react";
import { searchService } from "@/app/services/api/searchService";
import { Product } from "../types/Product";
import { ScrollView } from "react-native";
import { ProductCard } from "../components/ProductCard";
import { ROUTES } from "../navigation/constants";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Loader } from "../components/Loader";

type RootStackParamList = {
  ProductDetails: { productId: string };
};

export default function Search() {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [isBrandFilterActive, setIsBrandFilterActive] = useState(false);

  const toggleBrandFilter = () => {
    setIsBrandFilterActive(!isBrandFilterActive);
    setQuery("");
    setBrand("");
  };

  const handleInputChange = (text: string) => {
    setQuery(text);
  };

  const handleBrandChange = (text: string) => {
    setBrand(text);
  };

  const handleProductPress = (productId: string) => {
    navigation.navigate(ROUTES.PRODUCT_DETAILS, { productId });
  };

  useEffect(() => {
    setIsLoading(true);
    const searchCriteria: { query: string; brand: string } = { 
      query: query.trim() !== "" ? query : "",
      brand: brand.trim() !== "" ? brand : ""
    };  

    if (query.trim() !== "" || brand.trim() !== "") {
      searchService.searchProducts(searchCriteria).then((products) => {
        setProducts(products);
        setIsLoading(false);
      });
    } else {
      setProducts([]);
      setIsLoading(false);
    }
  }, [query, brand]);

  return (
    <View paddingTop={80} justifyContent="center" alignItems="center">
      <View position="absolute" right={0} top={50}>
        <Button onPress={toggleBrandFilter}>
          {isBrandFilterActive ? "Filter by brand" : "Filter by product"}
        </Button>
      </View>
      <View width="90%" paddingTop={10}>
        <View height={50}>
          {isBrandFilterActive ? (
            <Input
              placeholder="Enter product name..."
              value={query}
              onChangeText={handleInputChange}
            />
          ) : (
            <Input
              placeholder="Enter brand name..."
              value={brand}
              onChangeText={handleBrandChange}
              marginTop={10}
            />
          )}
        </View>
      </View>
      {isLoading ? (
        <View 
          position="absolute" 
          top="$19"
          left={0}
          right={0}
          justifyContent="center" 
          alignItems="center"
        >
          <Loader />
        </View>
      ) : products.length > 0 ? (
        <ScrollView>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              fromSearch={true}
              onPress={() => handleProductPress(product.id)}
            />
          ))}
        </ScrollView>
      ) : (
        <View justifyContent="center" alignItems="center">
          <Text fontSize={16} fontStyle="italic" color="$gray10" paddingTop={20}>No product found...</Text>
        </View>
      )}
    </View>
  );
}
