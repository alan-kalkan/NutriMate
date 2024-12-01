import AsyncStorage from '@react-native-async-storage/async-storage';

// Fonction pour stocker le token
const storeToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('authToken', token);
  } catch (error) {
    console.error('Error storing the token', error);
  }
};

// Fonction pour récupérer le token
const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    if (token !== null) {
      // Le token est récupéré avec succès
      return token;
    }
  } catch (error) {
    console.error('Error retrieving the token', error);
  }
};

export { storeToken, getToken };