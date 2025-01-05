import React, { useState } from 'react';
import { View, Text, Input, Button } from "tamagui";
import { handleAddReview } from '../services/utils/handleAddReview';
import { Rating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';
import { Review } from '../types/Review';

interface RouteParams {
    productId: string;
    userId: string;
  }

export default function ReviewScreen({ route }: { route: { params: RouteParams } }) {
    const { productId, userId } = route.params;
    const navigation = useNavigation();
    const [review, setReview] = useState<Review>({
        comment: '',
        rating: 0,
        product_id: productId,
        user_id: userId,
    });

    return (
        <View flex={1} justifyContent="center" alignItems="center" padding={16}>
            <View 
                width="100%" 
                flexDirection="row" 
                alignItems="center" 
                marginBottom={16}
                justifyContent="center"
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft color="black" size={24} />
                </TouchableOpacity>
                <Text fontSize={20} fontWeight="bold" marginLeft={10}>Add a Review</Text>
            </View>
            <View width="100%">
                <Input  multiline={true} placeholder="Review" value={review.comment} onChangeText={(text) => setReview({ ...review, comment: text })} />
            </View>
            <View marginTop={10}>
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
            <Button onPress={() => handleAddReview(review, navigation.goBack)}>
                <Text>Add your review!</Text>
            </Button>
        </View>
    );
}
