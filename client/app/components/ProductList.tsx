import { YStack, ScrollView } from "tamagui";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "../types/Product";

import { fetchProducts } from "../services/utils/fetchProducts";
import { fetchReviews } from "../services/utils/fetchReviews";
import { NavigationProp } from "@react-navigation/native";
import { handleProductPress } from "../services/utils/handleProductPress";

type RootStackParamList = {
  ProductDetails: { productId: string };
};

export function ProductList({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const fetchedProducts = await fetchProducts(setProducts);

        const productsWithRatings = await Promise.all(
          fetchedProducts.map(async (product: Product) => {
            const averageRating = await fetchReviews(product.id);
            return { ...product, averageRating };
          })
        );
        setProducts(productsWithRatings);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  fetchProductsData();
  }, []);


  
  return (
    <YStack height={400} paddingTop="$8">
      <ScrollView marginHorizontal="$4" marginTop="$6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onPress={() => handleProductPress(navigation, product.id)}
            fromSearch={false}
          />
        ))}
      </ScrollView>
    </YStack>
  );
}