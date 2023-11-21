import axios, { AxiosResponse } from 'axios';
import { CollectionMovie } from '../types'; // adjust the import path based on the actual location of your types.ts file

const API_URL = 'http://localhost:3001/api'; // replace with your API's URL

// Fetch all movies in a collection
export const getMoviesInCollection = async (collectionId: number): Promise<CollectionMovie[]> => {
    const response: AxiosResponse<CollectionMovie[]> = await axios.get(`${API_URL}/collections/${collectionId}/movies`);
    return response.data;
};

// Add a movie to a collection
export const addMovieToCollection = async (collectionId: number, movieId: number, watched: boolean = false): Promise<CollectionMovie> => {
    const response: AxiosResponse<CollectionMovie> = await axios.post(`${API_URL}/collections/${collectionId}/movies/${movieId}`, { watched });
    return response.data;
};

// Remove a movie from a collection
export const removeMovieFromCollection = async (collectionId: number, movieId: number): Promise<void> => {
    await axios.delete(`${API_URL}/collections/${collectionId}/movies/${movieId}`);
};