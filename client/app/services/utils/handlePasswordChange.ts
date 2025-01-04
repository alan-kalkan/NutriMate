import { userService } from "../api/userService";

export const handlePasswordChange = async (userId: string, newPassword: string) => {
    try {
        const response = await userService.updatePassword(userId, newPassword);
        if (response.ok) {
            alert("Password updated successfully.");
        } else {
            alert("Failed to update password. Please try again.");
        }
    } catch (error) {
        console.error('Error updating password:', error);
        alert("Error updating password. Please check your network connection and try again.");
    }
}