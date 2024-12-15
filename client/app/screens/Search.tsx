import { Text, Input, View, Button } from "tamagui";
import React, { useEffect, useState } from "react";
import { searchService } from "@/app/services/api/searchService";
import { Product } from "../types/Product";
import { ScrollView } from "react-native";
import { ProductCard } from "../components/ProductCard";
import { ROUTES } from "../navigation/constants";
import { useNavigation } from "@react-navigation/native";
export default function Search() {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const navigation = useNavigation();
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
    const searchCriteria: { query: string; brand: string } = { 
      query: query.trim() !== "" ? query : "",
      brand: brand.trim() !== "" ? brand : ""
    };  

    if (query.trim() !== "" || brand.trim() !== "") {
      searchService.searchProducts(searchCriteria).then((products) => {
        console.log(JSON.stringify(products, null, 2));
        setProducts(products);
      });
    } else {
      setProducts([]);
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
      {products.length > 0 ? (
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
        <Text paddingTop={20}>No product found...</Text>
      )}
    </View>
  );
}