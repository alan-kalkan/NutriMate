import { View, Spinner, YStack, ScrollView } from "tamagui";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "../types/Product";
import { productService } from "../services/api/productService";
import { useNavigation } from "@react-navigation/native";

export function ProductList() {
  const navigation = useNavigation();
  const handleProductPress = (product: Product) => {
    console.log('product', product)
    navigation.navigate('ProductDetails', { productId: product.id });
  }
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
      setError('Failed to fetch products');
    } finally {
      setIsLoading(false);
    }
  }


  if (isLoading) {
    return (
      <View>
        <Spinner />
      </View>
    );
  }

  return (
    <YStack height={400}>
      <ScrollView marginHorizontal="$4" marginTop="$6" >
        {products.map(product => (
          <ProductCard key={product.id} product={product} onPress={() => console.log('pressed')} />
        ))}
      </ScrollView>
    </YStack>
  );
}