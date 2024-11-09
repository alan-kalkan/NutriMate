import React from "react";
import { House, User, Heart, BookPlus } from "lucide-react-native";
import { YStack } from "tamagui";
export default function IconTabs() {
  return (
    <YStack
      backgroundColor="chartreuse"
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      height={65}
      flexDirection="row"
      justifyContent="space-between"
      paddingHorizontal="$8"
      paddingVertical="$2"
      paddingBottom="$3"
    >
      <House size={35} color="black" />
      <User size={35} color="black" />
      <Heart size={35} color="black" />
      <BookPlus size={35} color="black" />
    </YStack>
  );
}
