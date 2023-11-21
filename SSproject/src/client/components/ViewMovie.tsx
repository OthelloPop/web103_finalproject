import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById, deleteMovie } from '../api/moviesAPI';
import { Movie } from '../types';
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';
import NavBar from './NavBar';
import AddToCollection from './AddtoCollection';

function ViewMovie() {
  const { id } = useParams<{ id: string }>();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [showEditMovie, setShowEditMovie] = useState(false);
  const [showDeleteMovie, setShowDeleteMovie] = useState(false);
  
    useEffect(() => {
      const fetchMovie = async () => {
        const fetchedMovie = await getMovieById(Number(id));
        setMovie(fetchedMovie);
      };
  
      fetchMovie();
    }, [id]);

    const handleUpdateMovie = (updatedMovie: Movie) => {
      setMovie(updatedMovie);
      setShowEditMovie(false);
    };

    const handleDeleteMovie = async () => {
      if (movie) {
        await deleteMovie(movie.id);
        // ... remove the movie from your state
        setShowDeleteMovie(false);
      }
    };
  

    return (
        <div>
          <NavBar />
          {movie && (
            <div className="grid grid-row-8 grid-cols-2 gap-4 w-screen h-screen gap-0 mt-20 mx-auto">
              <div className="flex items-center justify-center col-start-1 row-start-1 row-end-1 pr-2"> 
                <h1 className="font-bold">Movie Details</h1>
              </div>
              <div className="flex items-center col-start-2 row-start-1 row-end-1"> 
                <button className="mx-2 custom-button bg-[#1a1a1a]" onClick={() => setShowEditMovie(true)}>Edit</button>
                <button className="mx-2 custom-button bg-[#1a1a1a]" onClick={() => setShowDeleteMovie(true)}>Delete</button>
                <AddToCollection />
              </div>
              <div className="flex items-center justify-center col-start-1 row-start-2 row-end-7"> 
                <img className="h-[575px] border border-4 border-yellow-600 " src={movie.posterImage} alt="Movie Poster" />
              </div>
              <div className="col-start-2 row-start-2 row-end-2 pt-4 pl-2"> 
                <h1>{movie.title}</h1>
                <br/>
                <div className="text-xl">
                  <p>{movie.director}, {movie.genre}</p>
                  <p>Rated {movie.rating}/10</p>
                  <p>{movie.runtime} minutes</p>
                </div>
              </div>
              <div className="flex flex-col col-start-2 row-start-3 row-end-7 pl-2 pt-2"> 
                <h2 className="text-4xl">A Brief Description:</h2>
                <br/>
                <p className="text-xl w-3/4">{movie.description}</p>
              </div>
            </div>
          )}
          {showEditMovie && movie && (
            <EditMovie
              show={showEditMovie}
              onClose={() => setShowEditMovie(false)}
              onEditMovie={handleUpdateMovie}
              movie={movie}
            />
          )}
          {showDeleteMovie && movie && (
            <DeleteMovie
              show={showDeleteMovie}
              onClose={() => setShowDeleteMovie(false)}
              onDelete={handleDeleteMovie}
              movie={movie}
            />
          )}
        </div>
      );
}

export default ViewMovie;