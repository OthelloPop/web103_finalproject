import axios, { AxiosResponse } from 'axios';
import { Profile } from '../types'; // adjust the import path based on the actual location of your types.ts file

const API_URL = 'http://localhost:3001/api'; // replace with your API's URL

// Fetch all profiles
export const getProfiles = async (): Promise<Profile[]> => {
    const response: AxiosResponse<Profile[]> = await axios.get(`${API_URL}/profiles`);
    return response.data;
};

// Fetch a profile by user ID
export const getProfileByUserId = async (id: number): Promise<Profile> => {
    const response: AxiosResponse<Profile> = await axios.get(`${API_URL}/profiles/${id}`);
    return response.data;
};

// Create a new profile
export const createProfile = async (profileData: Partial<Profile>): Promise<Profile> => {
    const response: AxiosResponse<Profile> = await axios.post(`${API_URL}/profiles`, profileData);
    return response.data;
};

// Update a profile by user ID
export const updateProfileByUserId = async (id: number, updatedData: Partial<Profile>): Promise<Profile> => {
    const response: AxiosResponse<Profile> = await axios.patch(`${API_URL}/profiles/${id}`, updatedData);
    return response.data;
};

// Delete a profile by user ID
export const deleteProfileByUserId = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/profiles/${id}`);
};