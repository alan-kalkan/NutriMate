import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearAuthToken = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem('authToken');
        // If you store refresh tokens or other auth-related items, clear them here
    } catch (error) {
        console.error('Error clearing auth token:', error);
        throw error;
    }
};