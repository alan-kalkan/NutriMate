import React, { useEffect, useState } from 'react';
import { View, Text, YStack } from 'tamagui';

import { Product } from '../types/Product';
import { productService } from '../services/api/productService';

export default function ProductDetails({ route }: { route: any }) {

  const { productId } = route.params;
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log("productId inside productDetails", productId);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productService.getProductById(productId);
        console.log("data", data);
        setProduct(data);
        
      } catch (error) {
        console.error('Erreur lors de la récupération du produit:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!product) {
    return <Text>Product not found</Text>;
  }
  return (
    <View>
        <YStack padding="$4">
        <Text fontSize="$6" fontWeight="bold">{product.name}</Text>
        </YStack>
    </View>
  );
}