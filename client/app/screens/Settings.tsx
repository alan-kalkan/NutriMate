import { Text, View, YStack } from "tamagui";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { reviewService } from "../services/api/reviewService";
import { Review } from "../types/Review";
import { ReviewCard } from "../components/ReviewCard";
import { useFocusEffect, useNavigation, NavigationProp } from '@react-navigation/native';
import { handleProductPress } from "../services/utils/handleProductPress";
import { Loader } from "../components/Loader";

type RootStackParamList = {
  ProductDetails: { productId: string };
};

export default function Settings() {
  const { userId, isLoggedIn } = useAuth();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  const fetchReviews = async () => {
    setIsLoading(true);
    try {
      if (userId) {
        const userReviews = await reviewService.getReviewsByUser(userId);
        setReviews(userReviews);
      }
    } catch (error) {
      console.error('Error fetching reviews', error);
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      fetchReviews();
    }, [userId])
  );

  return (
    <>
    {isLoading ? (
      <View flex={1} height="100%" justifyContent="center" alignItems="center"><Loader /></View>
    ) : (
      isLoggedIn ? (
        <YStack flex={1} alignItems="center" justifyContent="center">
      <View backgroundColor={"white"} height={500} width="80%" padding={30} borderRadius={20} borderColor={"black"} borderWidth={1} >
        {reviews.length > 0 ? reviews.map((review) => (
          <ReviewCard
            setIsLoading={setIsLoading}
            key={review.id}
            id={review.id}
            productId={review.product_id} 
            comment={review.comment} 
            rating={review.rating} 
            created_at={review.created_at} 
            onDelete={fetchReviews}
            onPress={() => handleProductPress(navigation, review.product_id)}
        />
          )) : <Text fontSize={15} textAlign="center" fontStyle="italic" color="#333">No reviews found</Text>}
        </View>
      </YStack>
    ) : (
        <View flex={1} justifyContent="center" alignItems="center">
          <Text fontSize={16} fontStyle="italic"  textAlign="center" color="$gray10">
            Please login to see your reviews
          </Text>
        </View>
      )
    )}
    </>
  );
}