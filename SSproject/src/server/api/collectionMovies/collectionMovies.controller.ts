import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Add controller functions as needed for creating, updating, and deleting movies from Collections
const addMovieToCollection = async (req: Request, res: Response) => {
    const { collectionId, movieId } = req.params;
    const { watched } = req.body; // Extract the watched from req.body

    // Create the new CollectionMovie in the database
    const newCollectionMovie = await prisma.collectionMovie.create({
        data: { collectionId: Number(collectionId), movieId: Number(movieId), watched },
    });

    res.json(newCollectionMovie);
}

const getMoviesInCollection = async (req: Request, res: Response) => {
    const { collectionId } = req.params;

    // Fetch all CollectionMovies for the given collectionId
    const collectionMovies = await prisma.collectionMovie.findMany({
        where: { collectionId: Number(collectionId) },
        include: { Movie: true }, // Include Movie data
    });

    res.json(collectionMovies);
}

const removeMovieFromCollection = async (req: Request, res: Response) => {
    const { collectionId, movieId } = req.params;

    // Delete the CollectionMovie from the database
    const deletedCollectionMovie = await prisma.collectionMovie.delete({
        where: { collectionId_movieId: { collectionId: Number(collectionId), movieId: Number(movieId) } },
    });

    res.json(deletedCollectionMovie);
}

export default {
    addMovieToCollection,
    getMoviesInCollection,
    removeMovieFromCollection,
};