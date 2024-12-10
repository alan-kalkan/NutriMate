import { userService } from "../api/userService";

export const fetchUserInformation = async (id: string) => {
    const data = await userService.getUserInformation(id);
    console.log('data', data);
    return data;
}