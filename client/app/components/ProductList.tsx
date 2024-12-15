import { View, Spinner, YStack, ScrollView } from "tamagui";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "../types/Product";
import { ROUTES } from "../navigation/constants";
import { fetchProducts } from "../services/utils/fetchProducts";
import { fetchReviews } from "../services/utils/fetchReviews";

export function ProductList({ navigation }: { navigation: any }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const fetchedProducts = await fetchProducts(setProducts, setError, setIsLoading);

        const productsWithRatings = await Promise.all(
          fetchedProducts!.map(async (product: Product) => {
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

  if (isLoading) {
    return (
      <View>
        <Spinner />
      </View>
    );
  }

  const handleProductPress = (productId: string) => {
    navigation.navigate(ROUTES.PRODUCT_DETAILS, { productId });
  };

  return (
    <YStack height={400}>
      <ScrollView marginHorizontal="$4" marginTop="$6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onPress={() => handleProductPress(product.id)}
          />
        ))}
      </ScrollView>
    </YStack>
  );
}