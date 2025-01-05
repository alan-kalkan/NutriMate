import React from 'react';
import { ActivityIndicator } from 'react-native';
import { YStack } from 'tamagui';

interface LoaderProps {
  size?: 'small' | 'large';
  color?: string;
}

export const Loader = ({ size = 'large', color = '#000' }: LoaderProps) => {
  return (
    <YStack f={1} height="100%" justifyContent="center" alignItems="center">
      <ActivityIndicator size={size} color={color} />
    </YStack>
  );
};