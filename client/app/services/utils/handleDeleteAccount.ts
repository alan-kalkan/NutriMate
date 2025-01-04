import { userService } from "../api/userService";
import { clearUserData } from "../auth/clearUserData";
import { clearAuthToken } from "../auth/clearAuthToken";

export const handleDeleteAccount = async (userId: string, navigation: any, setIsLoggedIn: (value: boolean) => void) => {
    try {
        const response = await userService.deleteUser(userId);
        
        if (!response) {
            throw new Error('No response from server');
        }
        if (response.status !== 200) {
            throw new Error(response.statusText || 'Failed to delete account');
        }
        
        // Clear local user data and auth state
        await Promise.all([
            clearUserData(),
            clearAuthToken(),
            setIsLoggedIn(false)
        ]);
        
        alert('Account deleted successfully');
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
        
        return true;
    } catch (error) {
        console.error('Error deleting account:', error);
        throw error;
    }
}