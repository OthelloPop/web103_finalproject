import express from "express";
import CollectionMovieController from "./collectionMovies.controller";

const router = express.Router();

// Add routes as needed for creating, updating, and deleting collectionMoviess
router.get("/collections/:collectionId/movies", CollectionMovieController.getMoviesInCollection); //get all CollectionMovies in a Collection
router.post("/collections/:collectionId/movies/:movieId", CollectionMovieController.addMovieToCollection); //create a CollectionMovie
router.delete("/collections/:collectionId/movies/:movieId", CollectionMovieController.removeMovieFromCollection); //delete a CollectionMovie

export default router;
