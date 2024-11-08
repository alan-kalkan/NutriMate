import { config } from "@tamagui/config";
import React from "react";
import { Text, View } from "react-native";
import { TamaguiProvider, createTamagui } from "tamagui";

const tamaguiConfig = createTamagui(config);

declare module "@tamagui/core" {
}

export default function Index() {

  return (
    <TamaguiProvider config={tamaguiConfig}>
    <View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
    </TamaguiProvider>
  );
}
