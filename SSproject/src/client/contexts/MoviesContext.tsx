import React, { createContext, useState } from 'react';

// Define the shape of the context data
interface Movie {
    id: number;
    title: string;
    genre: string;
    director: string;
    releaseDate: Date;
    releaseYear: number;
    description: string;
    runtime: number;
    posterImage: string;
    rating: number;
}

interface MoviesContextData {
    movies: Movie[];
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
}

// Create the context with default values
export const MoviesContext = createContext<MoviesContextData>({
    movies: [],
    setMovies: () => {},
});

// Create the provider component
export const MoviesProvider: React.FC<React.PropsWithChildren<Record<string, never>>> = ({ children }) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    return (
        <MoviesContext.Provider value={{ movies, setMovies }}>
            {children}
        </MoviesContext.Provider>
    );
};