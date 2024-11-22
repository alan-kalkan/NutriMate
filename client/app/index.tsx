import React, { useEffect, useState } from "react";
import { createTamagui } from "tamagui";
import { TamaguiProvider } from "tamagui";
import defaultConfig from '@tamagui/config/v3'

import * as SplashScreen from 'expo-splash-screen';
import CircularText from "./components/CircularText";
import TabNavigator from "./components/TabNavigator";

declare module "@tamagui/core" {
}

SplashScreen.preventAutoHideAsync();

const config = createTamagui(defaultConfig);

export default function Index() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.hideAsync();
      setIsReady(true);
    }
    prepare();
  }, []);

  if (!isReady) {
    return <CircularText />;
  };

  return (
    <TamaguiProvider config={config}>
        <TabNavigator />
    </TamaguiProvider>
  );
}
