import { Card, XStack, YStack, Text, Image} from "tamagui";
import React from "react";
import { Product } from "../types/Product";
import { Rating } from 'react-native-ratings';

import { TouchableOpacity } from "react-native";

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

export function ProductCard ({ product, onPress }: ProductCardProps) {

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Card
        maxHeight={150}
      key={product.id}
      elevate
      bordered
      backgroundColor="$gray4"
      pressStyle={{ scale: 0.895 }}
      overflow="hidden"
    >
      <XStack padding="$4" alignItems="center" justifyContent="space-between">
        <YStack flex={1}>
          <Text fontSize="$3" color="$gray11">{product.brand.name}</Text>
          <Text fontSize="$4" fontWeight="bold">{product.name}</Text>
          <Text fontSize="$3" color="$gray11">{product.price}{' '}€</Text>
          {product.description && (
            <Text fontSize="$3" color="$gray10" numberOfLines={2} ellipsizeMode="tail">
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
    </TouchableOpacity>
  );
}