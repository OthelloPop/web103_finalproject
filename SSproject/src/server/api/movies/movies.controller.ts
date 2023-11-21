import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createMovie = async (req: Request, res: Response) => {
    const { title, genre, director, releaseDate, releaseYear, description, runtime, posterImage, rating } = req.body;
  const movie = await prisma.movie.create({
    data: {
      title,
      genre,
      director,
      releaseDate: new Date(releaseDate),
      releaseYear,
      description,
      runtime,
      posterImage,
      rating,
    },
  });
  res.json(movie);
}

const getMovies = async (req: Request, res: Response) => {
    const movies = await prisma.movie.findMany();
    res.json(movies);
}

const getMovieByMovieId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const movie = await prisma.movie.findUnique({
        where: { id: Number(id) },
    });
    if (movie) {
        res.json(movie);
    } else {
        res.status(404).json({ error: 'Movie not found' });
    }
}

const updateMovieByMovieId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, genre, director, releaseDate, releaseYear, description, runtime, posterImage, rating } = req.body;

    // Check if id is defined and is a number
    if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: 'Invalid movie ID' });
    }

    // Check if movie exists before updating
    const existingMovie = await prisma.movie.findUnique({ where: { id: Number(id) } });
    if (!existingMovie) {
        return res.status(404).json({ error: 'Movie not found' });
    }

    // Update movie
    const movie = await prisma.movie.update({
        where: { id: Number(id) },
        data: {
            title,
            genre,
            director,
            releaseDate: new Date(releaseDate),
            releaseYear,
            description,
            runtime,
            posterImage,
            rating
        },
    });

    res.json(movie);
}

const deleteMovieByMovieId = async (req: Request, res: Response) => {
    const { id } = req.params;

    // Check if id is defined and is a number
    if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: 'Invalid movie ID' });
    }

    // Check if movie exists before deleting
    const existingMovie = await prisma.movie.findUnique({ where: { id: Number(id) } });
    if (!existingMovie) {
        return res.status(404).json({ error: 'Movie not found' });
    }

    // Delete movie
    const movie = await prisma.movie.delete({
        where: { id: Number(id) },
    });

    res.json({ message: 'Movie deleted successfully', movie });
}

export default {
    getMovies,
    getMovieByMovieId,
    createMovie,
    updateMovieByMovieId,
    deleteMovieByMovieId,
}