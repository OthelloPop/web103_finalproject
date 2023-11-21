import axios, { AxiosResponse } from 'axios';
import { Movie } from '../types';

const API_URL = 'http://localhost:3001/api'; // replace with your API's URL

// Fetch all movies
export const getMovies = async (): Promise<Movie[]> => {
  const response: AxiosResponse<Movie[]> = await axios.get(`${API_URL}/movies`);
  return response.data;
};

// Fetch a movie by ID
export const getMovieById = async (id: number): Promise<Movie> => {
  const response: AxiosResponse<Movie> = await axios.get(`${API_URL}/movies/${id}`);
  return response.data;
};

// Create a new movie
export const createMovie = async (movieData: Partial<Movie>): Promise<Movie> => {
  const response: AxiosResponse<Movie> = await axios.post(`${API_URL}/movies`, movieData);
  return response.data;
};

// Update a movie
export const updateMovie = async (id: number, updatedData: Partial<Movie>): Promise<Movie> => {
  const response: AxiosResponse<Movie> = await axios.patch(`${API_URL}/movies/${id}`, updatedData);
  return response.data;
};

// Delete a movie
export const deleteMovie = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/movies/${id}`);
};