import React, { useCallback, useState } from 'react';
import { View, Text, YStack, Image, ScrollView } from 'tamagui';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { ArrowLeft, Heart } from 'lucide-react-native';
import { Loader } from '../components/Loader';
import { Product } from '../types/Product';
import { ReviewList } from '../components/ReviewList';
import { AddReview } from '../components/AddReview';
import { fetchProductById } from '../services/utils/fetchProducts';
import { TouchableOpacity } from 'react-native';
import { favoriteService } from '../services/api/favoriteService';
import { useAuth } from '../context/AuthContext';
import { fetchFavoritesByProductId } from '../services/utils/fetchFavoritesByProductId';

export default function ProductDetails({ route }: { route: { params: { productId: string } } }) {
  const navigation = useNavigation();
  const { productId } = route.params;
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const { isLoggedIn, userId } = useAuth();

  const toggleFavorite = async () => {
    try {
      if (isFavorite) {
        await favoriteService.deleteFavorite(userId, productId);
        setIsFavorite(false);
      } else {
        await favoriteService.addFavorite(userId, productId);
        setIsFavorite(true);
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          await fetchProductById(productId, setProduct);
          if (isLoggedIn) {
            const favoriteStatus = await fetchFavoritesByProductId(userId, productId);
            setIsFavorite(!!favoriteStatus);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }, [productId, isLoggedIn, userId])
  );
  if (isLoading) {
    return <View flex={1} height="100%" justifyContent="center" alignItems="center"><Loader /></View>;
  }

  if (!product) {
    return <Text>Product not found</Text>;
  }
  return (
    <ScrollView marginHorizontal="$4" paddingTop="$8" shadowColor="#000" shadowOffset={{width: 0, height: 2}} shadowOpacity={0.1} shadowRadius={4}>
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
        <View flexDirection="row" justifyContent="flex-start" alignItems="center" gap={6}>
          <Text fontSize={24} color="#333" fontFamily="$archivo" fontWeight="bold" marginBottom={8}>
            {product.name}
          </Text>
          {isLoggedIn && (
              <TouchableOpacity onPress={toggleFavorite} style={{ marginBottom: 8 }}>
              <Heart 
                key={`favorite-${isFavorite}`}
                strokeWidth={0.75} 
                fill={isFavorite ? "red" : "none"} 
                color="red" 
              />
            </TouchableOpacity>
          )}
        </View>
        <Text fontSize={16} color="#666" fontFamily="$archivo" marginBottom={8}>
          {product.description}
        </Text>
        <Text fontSize={16} color="#666" fontFamily="$archivo" marginBottom={8}>
          Price: {product.price}$
        </Text>
        <Text fontSize={16} color="#666" fontFamily="$archivo" marginBottom={8}>
          Treatment Duration: {product.treatmentDuration} months
        </Text>
      </YStack>
      <ReviewList productId={productId} />
      <AddReview productId={productId} isLoading={isLoading} />
    </View>
    </ScrollView>
  );
}