import { Card, XStack, YStack, Text, Image, View } from "tamagui";
import React from "react";
import { Rating } from "react-native-ratings";
import { Product } from "../types/Product";
import { calculateAverageRating } from "../services/utils/reviewAverage";

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

export function ProductCard({
  product,
  onPress,
}: ProductCardProps) {
  
  const averageRating = calculateAverageRating(product.reviews || []);

  return (
    <View>
      <Card
        maxHeight={150}
        pressStyle={{ scale: 0.970 }}
        animation="bouncy"
        overflow="hidden"
        onPress={onPress}
        borderRadius="$0"
        padding="$2"
      >
        <XStack padding="$4" alignItems="center" justifyContent="space-between" backgroundColor="white">
          <YStack flex={1}>
            <Text fontSize="$3" color="#666" fontFamily="$archivo" fontWeight="bold">
              {product.brand.name}
            </Text>
            <Text fontSize="$4" fontFamily="$workSans" fontWeight="bold" color="#333">
              {product.name}
            </Text>
            <Text fontSize="$3" color="#666" fontFamily="$workSans">
              {product.price} €
            </Text>
            {product.description && (
              <Text
                fontSize="$3"
                color="$gray10"
                numberOfLines={2}
                ellipsizeMode="tail"
                fontFamily="$workSans"
              >
                {product.description}
              </Text>
            )}
          </YStack>

          <YStack alignItems="center">
            {product.image_url && (
              <Image
                source={{ uri: product.image_url }}
                width={80}
                height={80}
                borderRadius="$4"
                marginLeft="$4"
              />
            )}
            <Rating
              readonly={true}
              tintColor="#FFFF"
              startingValue={averageRating}
              imageSize={15}
              style={{
                marginTop: 8,
                marginLeft: 10,
              }}
            />
          </YStack>
        </XStack>
      </Card>
    </View>
  );
}
