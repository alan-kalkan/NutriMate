
import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearUserData = async (): Promise<void> => {
    try {
        // Add all user-related keys that need to be cleared
        const userKeys = [
            'userData',
            'userProfile',
            // Add any other user-related keys you're storing
        ];

        await Promise.all(userKeys.map(key => AsyncStorage.removeItem(key)));
    } catch (error) {
        console.error('Error clearing user data:', error);
        throw error;
    }
};