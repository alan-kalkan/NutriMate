import React, { useEffect, useState } from 'react';
import { View, Text, Spinner, YStack } from 'tamagui';
import { reviewService } from '../services/api/reviewService';
import { Review } from '../types/Review';
import { userService } from '../services/api/userService';
import { User } from '../types/User';
import { Rating } from 'react-native-ratings';
import { fetchReviews } from '../services/api/reviewService';

interface ReviewListProps {
  productId: string;
}

export const ReviewList: React.FC<ReviewListProps> = ({ productId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await fetchReviews(productId);
        setReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadReviews();
  }, [productId]);
  if (isLoading) {
    return (
      <View>
        <Spinner />
      </View>
    );
  }
  return (
    <View>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <YStack key={review.id} padding={15} marginVertical={10} backgroundColor="#f9f9f9" borderRadius={10} shadowColor="#000" shadowOffset={{ width: 0, height: 2 }} shadowOpacity={0.1} shadowRadius={5}>
          <View flexDirection="row" alignItems="center" marginBottom={5} gap="$3.5">
            <Text fontWeight="bold" fontSize={16} color="#333">{review.user.name} {review.user.last_name}</Text>
            <Rating readonly={true} startingValue={review.rating} imageSize={13} />
          </View>
          <Text fontSize={14} color="#555" marginBottom={5}>{review.comment}</Text>
          <Text fontSize={12} color="#aaa">Reviewed on {new Date(review.created_at).toLocaleDateString()}</Text>
          </YStack>
        ))
      ) : (
        <Text textAlign="center" fontSize={14} color="#555" marginBottom={10}>No reviews found, write the first one !</Text>
      )}
    </View>
  );
};