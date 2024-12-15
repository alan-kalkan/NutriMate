import { userService } from "../api/userService";

export const updatePassword = async (userId: string, newPassword: string) => {
    const response = await userService.updatePassword(userId, newPassword);
    return response;
};