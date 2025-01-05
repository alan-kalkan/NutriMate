import { Text, YStack, View, ScrollView } from "tamagui";
import React, { useState } from "react";
import { fetchFavorites } from "../services/utils/fetchProducts";
import { Favorite } from "../types/Favorites";
import { useAuth } from "../context/AuthContext";
import { ProductCard } from "../components/ProductCard";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { handleProductPress } from "../services/utils/handleProductPress";
import { StackNavigationProp } from "@react-navigation/stack";
import { Loader } from "../components/Loader";


type RootParamList = {
  Favorites: undefined;
};

export default function Favorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userId, isLoggedIn } = useAuth();
  const navigation = useNavigation<StackNavigationProp<RootParamList>>();

  useFocusEffect(
    React.useCallback(() => {
      const loadFavorites = async () => {
        try {
          const favs = await fetchFavorites(userId);
          setFavorites(favs);
        } finally {
          setIsLoading(false);
        }
      };
      
      loadFavorites();
      
      return () => {
        setIsLoading(true);
      };
    }, [userId])
  );

  return (
    <View flex={1} shadowColor="#000" shadowOffset={{width: 0, height: 2}} shadowOpacity={0.1} shadowRadius={4} marginTop={60}>
      {isLoading ? (
        <View flex={1} justifyContent="center" alignItems="center">
          <Loader />
        </View>
      ) : isLoggedIn ? (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <YStack 
            padding={16}
            space={16}
            alignItems="center" 
            justifyContent="flex-start"
          >
            {favorites.length > 0 ? (
              favorites.map((item) => (
                <ProductCard 
                  key={item.id} 
                  product={item.product} 
                  onPress={() => handleProductPress(navigation, item.product.id)} 
                  fromSearch={false} 
                />
              ))
            ) : (
              <Text fontSize={16} color="$gray10">
                No favorites yet
              </Text>
            )}
          </YStack>
        </ScrollView>
      ) : (
        <View flex={1} justifyContent="center" alignItems="center">
          <Text fontSize={16} fontStyle="italic"  textAlign="center" color="$gray10">
            Please login to see your reviews
          </Text>
        </View>
      )}
    </View>
  );
}
