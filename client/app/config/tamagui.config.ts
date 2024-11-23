import { createAnimations } from '@tamagui/animations-moti';
import { config } from '@tamagui/config/v3';
import { Easing } from 'react-native-reanimated';
import { createTamagui, createTokens } from 'tamagui';

import {
  archivoFont,
  color,
  helveticaFont,
  radius,
  size,
  space,
  workSansFont,
  zIndex,
} from './theme';

const tokens = createTokens({
  color,
  space,
  size,
  radius,
  zIndex,
});

const animations = createAnimations({
  '0.5ease': {
    type: 'timing',
    duration: 500,
    easing: Easing.ease,
  },
  '2spring': {
    type: 'spring',
    duration: 2000,
    dampingRatio: 0.8,
    stiffness: 80,
    overshootClamping: false,
    restDisplacementThreshold: 300,
    restSpeedThreshold: 2,
  },
  bouncy: {
    type: 'spring',
    damping: 9,
    mass: 0.9,
    stiffness: 150,
  },
  lazy: {
    type: 'spring',
    damping: 18,
    stiffness: 50,
  },
  slow: {
    type: 'spring',
    damping: 15,
    stiffness: 40,
  },
  quick: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  tooltip: {
    type: 'timing',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
});

const appConfig = createTamagui({
  ...config,
  animations,
  fonts: {
    body: workSansFont,
    archivo: archivoFont,
    helvetica: helveticaFont,
    workSans: workSansFont,
  },
  tokens: {
    ...config.tokens,
    ...tokens,
  },
  settings: {
    allowedStyleValues: 'somewhat-strict',
  },
});

export type AppConfig = typeof appConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;