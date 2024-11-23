import React, { useEffect, useState } from 'react';
import { View, Text, YStack, Image, ScrollView } from 'tamagui';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';

import { Product } from '../types/Product';
import { ReviewList } from '../components/ReviewList';
import { AddReview } from '../components/AddReview';
import { fetchProductById } from '../services/utils/fetchProducts';

export default function ProductDetails({ route }: { route: any }) {
  const navigation = useNavigation();
  const { productId } = route.params;
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProductById(productId, setProduct, setIsLoading);
  }, [productId]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!product) {
    return <Text>Product not found</Text>;
  }
  console.log('productDetails', JSON.stringify(product, null, 2));
  return (
    <ScrollView>
    <YStack flexDirection="row" justifyContent="center" alignItems="center" marginTop={16} marginLeft={16}>
      <ArrowLeft
        width={30}
        height={30}
        color="black"
        onPress={() => navigation.goBack()}
        style={{position: 'absolute', left: 0}}
      />
      <Text fontSize={26} fontWeight="bold" ff="$body" color="black" textTransform="uppercase">
        {product.brand.name}
      </Text>
    </YStack>
    <View padding={16} backgroundColor="#fff">
      {product.image_url && (
        <Image width={300} height={200} borderRadius={8} marginBottom={16} resizeMode="contain"
          source={{ uri: product.image_url }}
        />
      )}
      <YStack padding={16} backgroundColor="#fff" borderRadius={8}>
        <Text fontSize={24} color="#333" fontFamily="$archivo" fontWeight="bold" marginBottom={8}>
          {product.name}
        </Text>
        <Text fontSize={16} color="#666" fontFamily="$archivo" marginBottom={8}>
          {product.description}
        </Text>
        <Text fontSize={16} color="#666" fontFamily="$archivo" marginBottom={8}>
          Prix: {product.price} €
        </Text>
        <Text fontSize={16} color="#666" fontFamily="$archivo" marginBottom={8}>
          Durée du traitement: {product.treatmentDuration} mois
        </Text>
      </YStack>
      <ReviewList productId={productId} />
      <AddReview />
    </View>
    </ScrollView>
  );
}