import { userService } from "../api/userService";

export const updatePassword = async (userId: string, newPassword: string) => {
    const token = "your-authentication-token"; // Replace with actual token retrieval logic

    const response = await fetch(`http://localhost:3000/api/v1/user/updatePassword/${userId}`, {
        method: 'POST', // or PUT, depending on your API
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
        },
        body: JSON.stringify({ password: newPassword }),
    });

    if (!response.ok) {
        throw new Error(`Failed to update password: ${response.statusText}`);
    }

    return response.json(); // Assuming the response is JSON
};