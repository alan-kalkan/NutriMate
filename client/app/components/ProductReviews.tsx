import React, { useState } from 'react';
import { View } from 'tamagui';
import { ReviewList } from './ReviewList';
import { AddReview } from './AddReview';

interface Review {
  id: string;
  content: string;
  author: string;
}

export const ProductReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const addReview = (content: string) => {
    const newReview = {
      id: Date.now().toString(),
      content,
      author: 'Anonymous', // Replace with actual user data
    };
    setReviews([...reviews, newReview]);
  };

  return (
    <View>
      <AddReview onAddReview={addReview} />
      <ReviewList reviews={reviews} />
    </View>
  );
};