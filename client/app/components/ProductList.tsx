import { View, Spinner, YStack, ScrollView } from "tamagui";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "../types/Product";
import { productService } from "../services/api/productService";
import { ROUTES } from "../navigation/constants";

export function ProductList({ navigation }: { navigation: any }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await productService.getProducts();
      setProducts(data);
    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setIsLoading(false);
    }
  };

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
          console.log('product', JSON.stringify(product, null, 2)),
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