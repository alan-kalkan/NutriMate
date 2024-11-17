import { createTamagui } from 'tamagui'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'

const configuration = createTamagui({
  themes,
  tokens,
  shorthands,
  // ... other config options
})

export type AppConfig = typeof configuration
export default configuration
