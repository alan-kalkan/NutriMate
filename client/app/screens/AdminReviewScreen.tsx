import React, { useState } from 'react';
import { View, Text } from 'tamagui';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { ArrowLeft, X } from 'lucide-react-native';
import { FlatList, TouchableOpacity } from 'react-native';
import { fetchAllReviews } from '../services/utils/fetchReviews';
import { Review } from '../types/Review';
import { userService } from '../services/api/userService';
import { handleDeleteReview } from '../services/utils/handleDeleteReview';
import { Loader } from '../components/Loader';

interface ReviewWithUser extends Review {
    user_email: string;
}

export default function AdminReviewScreen() {
    const navigation = useNavigation();
    const [reviews, setReviews] = useState<ReviewWithUser[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchReviews = async () => {
        setIsLoading(true);
        const fetchedReviews = await fetchAllReviews();
        const reviewsWithUsers = await Promise.all(
            fetchedReviews.map(async (review) => {
                const user = await userService.getUserInformation(review.user_id);
                return { ...review, user_email: user.email };
            })
        );
        setReviews(reviewsWithUsers);
        setIsLoading(false);
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchReviews();
        }, [])
    );

    return (
        <>
            {isLoading ? (
                <View flex={1} justifyContent="center" alignItems="center">
                    <Loader />
                </View>
            ) : (
                <>
                    <View position="absolute" top={100} left={0} flexDirection="row" justifyContent="space-between" alignItems="center" padding={10}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <ArrowLeft size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View paddingTop={100} flex={1} justifyContent="center" alignItems="center">
                        <View maxHeight="80%" borderColor="black" borderWidth={1} padding={10} width="90%">
                            {reviews.length > 0 ? (
                                <FlatList
                                    data={reviews}
                                    renderItem={({ item, index }) => (
                                        <View 
                                            flexDirection="row" 
                                            justifyContent="space-between" 
                                            alignItems="center"
                                            borderBottomWidth={index < reviews.length - 1 ? 1 : 0}
                                            borderBottomColor="black"
                                            paddingBottom={10}
                                        >
                                            <View flex={1} marginRight={10}>
                                                <Text fontSize={14} numberOfLines={2}>&quot;{item.comment}&quot;</Text>
                                                <Text fontSize={14}> rated: {item.rating}, from: {item.user_email}</Text>
                                            </View>
                                            <TouchableOpacity onPress={async () => {
                                                await handleDeleteReview(item.id);
                                                fetchReviews();
                                            }}>
                                                <X color="red" />
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                />
                            ) : (
                                <Text fontSize={15} textAlign="center" fontStyle="italic" color="#333">No reviews found</Text>
                            )}
                        </View>
                    </View>
                </>
            )}
        </>
    );
}