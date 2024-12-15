import { Text, Input, View } from "tamagui";
import React, { useEffect, useState } from "react";
import { searchService } from "@/app/services/api/searchService";
import { Product } from "../types/Product";
import { ScrollView } from "react-native";
import { ProductCard } from "../components/ProductCard";

export default function Search() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const handleInputChange = (text: string) => {
    setQuery(text);
  };

  useEffect(() => {
    searchService.searchProducts(query).then((products) => {
      console.log(JSON.stringify(products, null, 2));
      setProducts(products);
    });
  }, [query]);
  return (
    <View paddingTop={80} justifyContent="center" alignItems="center">
      <Input
        placeholder="Rechercher..."
        value={query}
        onChangeText={handleInputChange}
        width="80%"
      />
      <Text color="black">Search</Text>
      <ScrollView>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            fromSearch={true}
            onPress={() => {console.log(product)}}
          />
        ))}
      </ScrollView>
    </View>
  );
}