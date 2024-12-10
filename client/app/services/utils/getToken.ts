import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async (): Promise<string | null> => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    return token;
  } catch (error) {
    console.error('Failed to retrieve token:', error);
    return null;
  }
};