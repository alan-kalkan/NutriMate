import { USER_ENDPOINTS } from "./enpoints";
import { User } from "../../types/User";
import { storeToken } from "../utils/token";


export const userService = {
  getUserById: async (id: string): Promise<User> => {
    const response = await fetch(`${USER_ENDPOINTS.userById}/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return response.json();
  },

  login:  async function loginUser(email: string, password: string) {
    const response = await fetch(`${USER_ENDPOINTS.login}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    console.log(response);
    const data = await response.json();
    if (response.ok) {
      // Stocker le token dans AsyncStorage
      await storeToken(data.token);
      return { success: true, message: 'Login successful' };
    } else {
      return { success: false, message: 'Login failed: ' + data.message };
    }
  },

  register: async function registerUser(email: string, password: string, name: string, last_name: string, gender: string) {
    const response = await fetch(`${USER_ENDPOINTS.register}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name, last_name, gender }),
    });
    console.log(response);
    const data = await response.json();
    if (response.ok) {
      // Stocker le token dans AsyncStorage
      await storeToken(data.token);
      return { success: true, message: 'Registered successful' };
    } else {
      return { success: false, message: 'Register failed: ' + data.message };
    }
  }
};
