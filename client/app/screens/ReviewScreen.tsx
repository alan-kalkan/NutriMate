import React, { useState } from 'react';
import { View, Text, Input, Button } from "tamagui";
import { handleAddReview } from '../services/utils/handleAddReview';
import { Rating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';

export default function ReviewScreen({ route }: { route: { params: { productId: string, userId: string } } }) {
    const { productId, userId } = route.params;
    const navigation = useNavigation();
    const [review, setReview] = useState({
        comment: '',
        rating: 0,
        product_id: productId,
        user_id: userId,
    });

    return (
        <View flex={1} justifyContent="center" alignItems="center" padding={16}>
            <ArrowLeft color="black" size={24} onPress={() => navigation.goBack()} />
            <Text>Add a Review</Text>
            <View>
                <Text>Comment</Text>
                <Input placeholder="Review" value={review.comment} onChangeText={(text) => setReview({ ...review, comment: text })} />
            </View>
            <View>
                <Text>Rating</Text>
                <Rating
                    type='custom'
                    ratingCount={5}
                    imageSize={20}
                    startingValue={0}
                    jumpValue={0.5}
                    fractions={2}
                    onFinishRating={(rating: number) => setReview((prevReview) => ({ ...prevReview, rating }))}
                />
            </View>
            <Button onPress={() => handleAddReview(review, navigation)}>
                <Text>Add Review</Text>
            </Button>
        </View>
    );
}