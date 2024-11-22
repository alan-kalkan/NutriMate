import { Card, XStack, YStack, Text, Image, View } from "tamagui";
import React from "react";
import { Rating } from "react-native-ratings";
import { Product } from "../types/Product";


interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

export function ProductCard({
  product,
  onPress,
}: ProductCardProps) {

  return (
    <View>
      <Card
        maxHeight={150}
        elevate
        bordered
        pressStyle={{ scale: 0.895 }}
        overflow="hidden"
        onPress={onPress}
      >
        <XStack padding="$4" alignItems="center" justifyContent="space-between" backgroundColor="$purple9">
          <YStack flex={1}>
            <Text fontSize="$3" color="$gray11">
              {product.brand.name}
            </Text>
            <Text fontSize="$4" fontWeight="bold">
              {product.name}
            </Text>
            <Text fontSize="$3" color="$gray11">
              {product.price} €
            </Text>
            {product.description && (
              <Text
                fontSize="$3"
                color="$gray10"
                numberOfLines={2}
                ellipsizeMode="tail"
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
              startingValue={product.averageRating || 0}
              imageSize={15}
              style={{
                marginTop: 8,
              }}
            />
          </YStack>
        </XStack>
      </Card>
    </View>
  );
}
