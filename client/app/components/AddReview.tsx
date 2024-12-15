import React, { useState } from 'react';
import { Rating } from 'react-native-ratings';
import { View, Text, Input, YStack } from 'tamagui';
import { Send } from 'lucide-react-native';

export const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (value: number) => {
    setRating(value);
  }
  const handleCommentChange = (value: string) => {
    setComment(value);
    console.log(comment);
  }

  const handleSubmit = () => {
    console.log(rating, comment);
  }
  return (
    <View marginLeft={10} marginRight={10}>
        <Text textAlign="left" fontSize={16} fontWeight="bold" marginTop={10} marginBottom={10}>Add a review</Text>
        <YStack flexDirection="row" justifyContent="center" alignItems="center" gap="$1.5">
          <Input height={100} width="70%" multiline={true} numberOfLines={4} placeholder="Write your review..." onChangeText={handleCommentChange}/>
          <Send size={20} color="#000" onPress={handleSubmit}/>
          <Rating showRating={true} fractions={1} jumpValue={0.5} startingValue={0} imageSize={20} style={{ minWidth: 120 }} onFinishRating={handleRatingChange}/>
        </YStack>
    </View>
  );
};