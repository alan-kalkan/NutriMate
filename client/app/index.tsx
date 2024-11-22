import React, { useEffect, useState } from "react";

import { TamaguiProvider } from "tamagui";

import * as SplashScreen from 'expo-splash-screen';
import CircularText from "./components/CircularText";
import configuration from "./tamagui.config";
import TabNavigator from "./components/TabNavigator";

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
    <TamaguiProvider config={configuration}>
        <TabNavigator />
    </TamaguiProvider>
  );
}
