import React, { useState } from 'react';
import { View, Input, Button, Popover } from 'tamagui';
import { reviewService } from '../services/api/reviewService';
import { Modal } from 'react-native';

export const AddReview = () => {
  const [content, setContent] = useState('');

  const handleAddReview = () => {
    if (content.trim()) {
      reviewService.addReview({ comment: content, rating: 5 });
      setContent('');
    }
  };
  console.log("content", content)
  return (
    <View>
      <Popover>
        <Popover.Trigger>
          <Button>Add Review</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Input
            value={content}
            onChangeText={setContent}
            placeholder="Write your review..."
          />
        </Popover.Content>
      </Popover>
    </View>
  );
};