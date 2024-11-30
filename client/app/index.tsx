import React, { useEffect, useState } from "react";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from './config/tamagui.config'

import * as SplashScreen from 'expo-splash-screen';
import CircularText from "./components/CircularText";
import TabNavigator from "./components/TabNavigator";
import RootLayout from "./_layout";

declare module "@tamagui/core" {
}

SplashScreen.preventAutoHideAsync();

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
    <TamaguiProvider config={tamaguiConfig}>
        <RootLayout />
    </TamaguiProvider>
  );
}
