import React, { useState } from 'react';
import { View, Input, Button } from 'tamagui';

export const AddReview = () => {
  const [content, setContent] = useState('');

  const handleAddReview = () => {
    if (content.trim()) {
      onAddReview(content);
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