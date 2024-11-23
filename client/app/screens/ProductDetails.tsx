import React, { useEffect, useState } from 'react';
import { View, Text, YStack, Image, Button, Spacer, ScrollView } from 'tamagui';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';

import { Product } from '../types/Product';
import { productService } from '../services/api/productService';
import { ReviewList } from '../components/ReviewList';
import { AddReview } from '../components/AddReview';

export default function ProductDetails({ route }: { route: any }) {
  const navigation = useNavigation();
  const { productId } = route.params;
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productService.getProductById(productId);
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
    <ScrollView>
    <YStack flexDirection="row" alignItems="center" marginTop={16} marginLeft={16}>
      <ArrowLeft
        width={30}
        height={30}
        padding={10}
        borderRadius={5}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <Spacer flex={1} />
      <Text fontSize={26} fontWeight="bold" fontFamily="Roboto" color="#666">
        {product.brand.name}
      </Text>
      <Spacer flex={1} />
    </YStack>
    <View padding={16} backgroundColor="#fff">
      {product.image_url && (
        <Image width="100%" height={200} borderRadius={8} marginBottom={16}
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