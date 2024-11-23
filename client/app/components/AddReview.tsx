import React, { useState } from 'react';
import { View, Text, Input, Button, Popover } from 'tamagui';

import { PlusCircle } from 'lucide-react-native';

export const AddReview = () => {

  return (
    <View>
      <Text>Add a review</Text>
      <PlusCircle width={30} height={30} color="black" />
    </View>
  );
};