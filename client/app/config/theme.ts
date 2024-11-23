import { createFont } from 'tamagui';

import { opacifyHexColor } from '../assets/utils';

const fontSizes = {
  1: 8,
  2: 10,
  3: 12,
  4: 13,
  5: 14,
  6: 16,
  7: 18,
  8: 20,
  9: 24,
  10: 30,
  11: 36,
  12: 48,
  13: 60,
  14: 72,
  15: 96,
  16: 128,
};

export const archivoFont = createFont({
  family: 'Archivo',
  size: fontSizes,
  face: {
    300: { normal: 'Archivo-Light', italic: 'Archivo-LightItalic' },
    400: { normal: 'Archivo-Regular', italic: 'Archivo-Italic' },
    500: { normal: 'Archivo-Medium', italic: 'Archivo-MediumItalic' },
    600: { normal: 'Archivo-SemiBold', italic: 'Archivo-SemiBoldItalic' },
    700: { normal: 'Archivo-Bold', italic: 'Archivo-BoldItalic' },
    800: { normal: 'Archivo-ExtraBold', italic: 'Archivo-ExtraBoldItalic' },
    900: { normal: 'Archivo-Black', italic: 'Archivo-BlackItalic' },
  },
});

export const helveticaFont = createFont({
  family: 'Helvetica',
  size: fontSizes,
  face: {
    300: { normal: 'Helvetica-Light' },
    400: { normal: 'Helvetica', italic: 'Helvetica-Oblique' },
    700: { normal: 'Helvetica-Bold', italic: 'Helvetica-BoldOblique' },
  },
});

export const workSansFont = createFont({
  family: 'Work Sans',
  size: fontSizes,
  face: {
    300: { normal: 'WorkSans-Light', italic: 'WorkSans-LightItalic' },
    400: { normal: 'WorkSans-Regular', italic: 'WorkSans-Italic' },
    500: { normal: 'WorkSans-Medium', italic: 'WorkSans-MediumItalic' },
    600: { normal: 'WorkSans-SemiBold', italic: 'WorkSans-SemiBoldItalic' },
    700: { normal: 'WorkSans-Bold', italic: 'WorkSans-BoldItalic' },
    800: { normal: 'WorkSans-ExtraBold', italic: 'WorkSans-ExtraBoldItalic' },
    900: { normal: 'WorkSans-Black', italic: 'WorkSans-BlackItalic' },
  },
});

const sizeToSpace = (v: number) => {
  if (v === 0) return 0;
  if (v === 2) return 0.5;
  if (v === 4) return 1;
  if (v === 8) return 1.5;
  if (v <= 16) return Math.round(v * 0.333);
  return Math.floor(v * 0.7 - 12);
};

export const size = {
  $0: 0,
  '$0.25': 2,
  '$0.5': 4,
  '$0.75': 8,
  $1: 20,
  '$1.5': 24,
  $2: 28,
  '$2.5': 32,
  $3: 36,
  '$3.5': 40,
  $4: 44,
  $true: 44,
  '$4.5': 48,
  $5: 52,
  $6: 64,
  $7: 74,
  $8: 84,
  $9: 94,
  $10: 104,
  $11: 124,
  $12: 144,
  $13: 164,
  $14: 184,
  $15: 204,
  $16: 224,
  $17: 224,
  $18: 244,
  $19: 264,
  $20: 284,
};

type SizeKeysIn = keyof typeof size;
type Sizes = {
  [Key in SizeKeysIn extends `$${infer Key}` ? Key : SizeKeysIn]: number;
};
type SizeKeys = `${keyof Sizes extends `${infer K}` ? K : never}`;

const spaces = Object.entries(size).map(([k, v]) => {
  return [k, sizeToSpace(v)] as const;
});

const spacesNegative = spaces.slice(1).map(([k, v]) => [`-${k.slice(1)}`, -v]);

type SizeKeysWithNegatives =
  | Exclude<`-${SizeKeys extends `$${infer Key}` ? Key : SizeKeys}`, '-0'>
  | SizeKeys;

export const space: {
  [Key in SizeKeysWithNegatives]: Key extends keyof Sizes ? Sizes[Key] : number;
} = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative),
};

export const color = {
  black: '#000000',
  black20: opacifyHexColor('#000000', 20),
  white: '#FFFFFF',
  success: '#3F7C23',
  danger: '#DC3545',
  error: '#BC382A',
  beigePrimary: '#FCF5EE',
  beigeSecondary: '#F4F0E9',
  bluePrimary: '#002961',
  bluePrimary15: opacifyHexColor('#002961', 15),
  bluePrimary25: opacifyHexColor('#002961', 25),
  bluePrimary50: opacifyHexColor('#002961', 50),
  blueSecondary: '#5588CD',
  blueTertiary: '#C4D2E4',
  blueQuaternary: '#315A92',
  bluePrimaryLight: '#5588cd80',
  greyPrimary: '#C7C5C5',
  greySecondary: '#949191',
  greySecondary50: '#00296180',
  greyTertiary: '#C4C4C4',
  greyQuaternary: '#eaeaea',
  orangePrimary: '#FF6943',
  orangeSecondary: '#FFE8DF',
  almaPrimary: '#FA5122',
  quizPrimary: '#FF2E00',
  quizSuccess: '#11C258',
  quizFailure: '#E42828',
  bgOverlay05: 'rgba(0, 0, 0, 0.5)',
  bgOverlay01: 'rgba(0, 0, 0, 0.1)',
  bgOverlay025: 'rgba(0, 0, 0, 0.25)',
  imageBorderColor: '#D9D9D980',
};

export const radius = {
  0: 0,
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  true: 9,
  5: 10,
  6: 16,
  7: 19,
  8: 22,
  9: 26,
  10: 34,
  11: 42,
  12: 50,
};

export const zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
};