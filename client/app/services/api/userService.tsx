import { USER_ENDPOINTS } from "./enpoints";
import { User } from "../../types/User";


export const userService = {
  getUserById: async (id: string): Promise<User> => {
    const response = await fetch(`${USER_ENDPOINTS.userById}/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return response.json();
  },
};