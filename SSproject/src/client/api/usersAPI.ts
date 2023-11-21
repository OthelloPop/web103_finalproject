import axios, { AxiosResponse } from 'axios';
import { User, Collection} from '../types';

const API_URL = 'http://localhost:3001/api'; // replace with your API's URL


// Fetch all users
export const getUsers = async (): Promise<User[]> => {
  const response: AxiosResponse<User[]> = await axios.get(`${API_URL}/users`);
  return response.data;
};

// Fetch a user by ID
export const getUserById = async (id: number): Promise<User> => {
  const response: AxiosResponse<User> = await axios.get(`${API_URL}/users/${id}`);
  return response.data;
};

// Fetch a user by name and email
export const getUserByNameAndEmail = async (name: string, email: string): Promise<User> => {
  const response: AxiosResponse<User> = await axios.get(`${API_URL}/users/search`, {
    params: {
      name,
      email,
    },
  });
  return response.data;
};

// Create a new user
export const createUser = async (userData: Partial<User>): Promise<User> => {
  const response: AxiosResponse<User> = await axios.post(`${API_URL}/users`, userData);
  return response.data;
};

// Update a user
export const updateUser = async (id: number, updatedData: Partial<User>): Promise<User> => {
  const response: AxiosResponse<User> = await axios.patch(`${API_URL}/users/${id}`, updatedData);
  return response.data;
};

// Delete a user
export const deleteUser = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/users/${id}`);
};

// Fetch a user's collections
export const getCollectionsByUserId = async (id: number): Promise<Collection[]> => {
  const response: AxiosResponse<Collection[]> = await axios.get(`${API_URL}/users/${id}/collections`);
  return response.data;
};