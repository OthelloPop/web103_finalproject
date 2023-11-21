import express from 'express';
import MoviesController from './movies.controller';

const router = express.Router();

// Add routes as needed for creating, updating, and deleting movies
router.get('/', MoviesController.getMovies);
router.get('/:id', MoviesController.getMovieByMovieId);
router.post('/', MoviesController.createMovie);
router.patch('/:id', MoviesController.updateMovieByMovieId);
router.delete('/:id', MoviesController.deleteMovieByMovieId);

export default router;