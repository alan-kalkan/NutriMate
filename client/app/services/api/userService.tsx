import { USER_ENDPOINTS } from "./endpoints";
import { User } from "../../types/User";
import { getToken, storeToken } from "../utils/token";


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
    const data = await response.json();
    if (response.ok) {
      await storeToken(data.token);
      return { success: true, message: 'Login successful', data };
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

      await storeToken(data.token);
      return { success: true, message: 'Registered successful' };
    } else {
      return { success: false, message: 'Register failed: ' + data.message };
    }
  },

  getUserInformation: async function getUserInformation(id: string) {
    const token = await getToken();
    const response = await fetch(`${USER_ENDPOINTS.userInformation}/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('response', response);
    const data = await response.json();
    console.log('data', data);
    return data;
  },

  updateUser: async function updateUser(userId: string, name: string, last_name: string, gender: string, password: string) {
    const token = await getToken();
    const response = await fetch(`${USER_ENDPOINTS.updateUser}/${userId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, last_name, gender, password }),
    });
    return response;
  },

  updatePassword: async function updatePassword(userId: string, newPassword: string) {
    const token = await getToken();
    const response = await fetch(`${USER_ENDPOINTS.updatePassword}/${userId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: userId, newPassword }),
    });
    return response;
  }
};
