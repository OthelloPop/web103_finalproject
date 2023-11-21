// types.ts

export interface User {
    id: number;
    name: string;
    email: string;
    collections: Collection[];
    profile?: Profile;
  }
  
  export interface Collection {
    id: number;
    name: string;
    description: string;
    userId: number;
    user: User;
    collectionMovies: CollectionMovie[];
  }
  
  export interface Movie {
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
    collectionMovies: CollectionMovie[];
  }
  
  export interface Profile {
    id: number;
    bannerImage: string;
    description: string;
    tags: string;
    userId: number;
    user: User;
  }
  
  export interface CollectionMovie {
    collectionId: number;
    movieId: number;
    watched: boolean;
    collection: Collection;
    movie: Movie;
  }