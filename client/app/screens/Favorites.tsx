import { Text, YStack } from "tamagui";
import React, { useState } from "react";
import { fetchFavorites } from "../services/utils/fetchProducts";
import { Favorite } from "../types/Favorites";
import { useAuth } from "../context/AuthContext";
import { ProductCard } from "../components/ProductCard";
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView } from "react-native";

export default function Favorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const { userId } = useAuth();
  
  useFocusEffect(
    React.useCallback(() => {
      fetchFavorites(userId).then(setFavorites);
    }, [userId])
  );

  console.log('fav', JSON.stringify(favorites, null, 2));
  return (
    <>
      <Text color="$bluePrimary" fontFamily="$workSans" textAlign="center">Favorites</Text>
      <ScrollView>
        <YStack alignItems="center" justifyContent="flex-start" height="50%">
          {favorites.map((item) => (
            <ProductCard key={item.id} product={item.product} onPress={() => {}} fromSearch={false} />
          ))}
        </YStack>
      </ScrollView>
    </>
  )
}
