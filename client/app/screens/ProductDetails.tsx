import React, { useEffect, useState } from 'react';
import { View, Text, YStack } from 'tamagui';

import { Product } from '../types/Product';
import { productService } from '../services/api/productService';

export default function ProductDetails() {

//   const [product, setProduct] = useState<Product | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//         try {
//             const data = await productService.getProductById(productId as string);
//             setProduct(data);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setIsLoading(false);
//         }
//     };
//     fetchProduct();
//   }, [productId]);

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
        {/* Ajoutez ici les autres détails du produit */}
        </YStack>
    </View>
  );
}