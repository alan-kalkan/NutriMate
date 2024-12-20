import { Text, YStack } from "tamagui";
import React, { useState } from "react";
import { fetchFavorites } from "../services/utils/fetchProducts";
import { Favorite } from "../types/Favorites";
import { useAuth } from "../context/AuthContext";
import { ProductCard } from "../components/ProductCard";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native";
import { handleProductPress } from "../services/utils/handleProductPress";
import { StackNavigationProp } from "@react-navigation/stack";

// Define RootParamList if not already defined
type RootParamList = {
  Favorites: undefined; // Add your route names and their params here
  // Other routes...
};

export default function Favorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const { userId, isLoggedIn } = useAuth();
  const navigation = useNavigation<StackNavigationProp<RootParamList>>();

  useFocusEffect(
    React.useCallback(() => {
      fetchFavorites(userId).then(setFavorites);
    }, [userId])
  );

  console.log('fav', JSON.stringify(favorites, null, 2));
  return (
    <>
      {isLoggedIn ? (
        <ScrollView>
          <YStack alignItems="center" justifyContent="flex-start" height="50%">
          {favorites.map((item) => (
            <ProductCard key={item.id} product={item.product} onPress={() => handleProductPress(navigation, item.product.id)} fromSearch={false} />
          ))}
        </YStack>
      </ScrollView>
      ) : (
        <YStack alignItems="center" justifyContent="center" flex={1}>
          <Text>Please login to see your favorites</Text>
        </YStack>
      )}
    </>
  )
}
