import React from 'react';
import { View, Text } from 'tamagui';

import { Plus } from 'lucide-react-native';
import { useAuth } from '../context/AuthContext';
import { TouchableOpacity } from 'react-native';
import { ROUTES } from '../navigation/constants';
import { useNavigation } from '@react-navigation/native';

export const AddReview = ({ productId }: { productId: string }) => {
  const { isLoggedIn, userId } = useAuth();
  const navigation = useNavigation();
  return (
    <View>
      { isLoggedIn ? (
        <View flexDirection="row" alignItems="center" justifyContent="center" gap={10}>
          <Text>Add a review</Text>
          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.REVIEW_FORM, {userId: userId, productId: productId})}>
            <Plus width={30} height={30} color="black" />
          </TouchableOpacity>
        </View>
      ) : (
        <Text>Please login to add a review</Text>
      )}
    </View>
  );
};