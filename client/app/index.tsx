import { config } from "@tamagui/config";
import React from "react";

import { TamaguiProvider, createTamagui } from "tamagui";
import IconTabs from "./components/IconTabs";
const tamaguiConfig = createTamagui(config);

declare module "@tamagui/core" {
}

export default function Index() {

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <IconTabs />
    </TamaguiProvider>
  );
}
