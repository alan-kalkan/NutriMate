import React, { useState } from 'react';
import { View, Input, Button } from 'tamagui';
import { reviewService } from '../services/api/reviewService';

export const AddReview = () => {
  const [content, setContent] = useState('');

  const handleAddReview = () => {
    if (content.trim()) {
      reviewService.addReview({ comment: content, rating: 5 });
      setContent('');
    }
  };

  return (
    <View>
      <Input
        value={content}
        onChangeText={setContent}
        placeholder="Write your review..."
      />
      <Button onPress={handleAddReview}>Submit Review</Button>
    </View>
  );
};