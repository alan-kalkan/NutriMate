import React from 'react';
import { View } from 'tamagui';
import Svg, { Path, Text, TextPath, Defs } from 'react-native-svg';

const CircularText = () => {
  return (
    <View>
      <Svg height="300" width="300" viewBox="0 0 200 200">
        <Defs>
          <Path
            id="circlePath"
            // Modifié le chemin pour un cercle complet
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Defs>
        <Text fill="black" fontSize={30} fontWeight="bold">
          <TextPath 
            href="#circlePath"
            startOffset="10"
            spacing="auto"
            // Ajouté ces propriétés pour mieux contrôler l'espacement
            textLength="471"
            lengthAdjust="spacingAndGlyphs"
          >
            💚🙏💚 💊 💚🙏💚 💊💚🙏💚 💊
          </TextPath>
        </Text>
      </Svg>
    </View>
  );
};

export default CircularText;