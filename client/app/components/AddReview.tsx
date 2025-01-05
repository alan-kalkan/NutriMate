import React, { useState } from 'react';
import { View, Text } from 'tamagui';

import { Plus } from 'lucide-react-native';
import { useAuth } from '../context/AuthContext';
import { TouchableOpacity } from 'react-native';
import { ROUTES } from '../navigation/constants';
import { useNavigation } from '@react-navigation/native';
import { Loader } from '../components/Loader';

interface AddReviewProps {
  productId: string;
  isLoading: boolean;
}

export const AddReview: React.FC<AddReviewProps> = ({ productId, isLoading }) => {
  const { isLoggedIn, userId } = useAuth();
  const navigation = useNavigation();

  return (
    <View>
      {isLoading ? (
        <View flex={1} height="100%" justifyContent="center" alignItems="center">
          <Loader />
        </View>
      ) : isLoggedIn ? (
        <View flexDirection="row" alignItems="center" justifyContent="center" gap={10}>
          <Text>Add a review</Text>
          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.REVIEW_FORM, {userId: userId, productId: productId})}>
            <Plus width={30} height={30} color="black" />
          </TouchableOpacity>
        </View>
      ) : (
        <Text fontSize={14} fontStyle="italic" flex={1} textAlign="center" color="$gray10">Please <Text fontWeight="bold" color="$gray10">login</Text> to add a review</Text>
      )}
    </View>
  );
};