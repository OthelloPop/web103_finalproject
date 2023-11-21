import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from '../api/moviesAPI';
import { Movie as MovieType } from '../types';
import MovieBasic from './MovieBasic';
import NewMovie from './NewMovie';
import NavBar from './NavBar'; // Import NavBar

const Discover: React.FC = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [showNewMovieModal, setShowNewMovieModal] = useState(false);

  console.log(movies);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies();
      setMovies(movies);
    };

    fetchMovies();
  }, []);

  const addNewMovie = (newMovie: MovieType) => {
    setMovies(prevMovies => [...prevMovies, newMovie]);
  };

  return (
    <div>

      <div className="absolute top-28 left-16">
        <h1 className="font-bold">Discover</h1>
        <p className="pt-2">Find & add movies!</p>
      </div>

      <div className="flex top-32 left-16 mt-48">
        <NavBar />

        <div className="flex flex-wrap ml-16">

          {movies.length > 0 ? (
            movies.map(movie => (
              <Link key={movie.id} to={`/viewMovie/${movie.id}`} className="mr-8">
               <MovieBasic movie={movie} />
             </Link>
           ))
         ) : (

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className={`${showNewMovieModal ? 'blur-sm' : ''}`}>No movies to discover 😔</h1>
            <br/>
            <h2 className={`${showNewMovieModal ? 'blur-sm' : ''}`}>Let's create one!</h2>
            <br/>
            <button className={`custom-button bg-[#1a1a1a] ${showNewMovieModal ? 'blur-sm' : ''}`} onClick={() => setShowNewMovieModal(true)}>Create Movie</button>
          </div> 

          )}

        </div>

        <NewMovie show={showNewMovieModal} onClose={() => setShowNewMovieModal(false)} onNewMovie={addNewMovie}/>
    </div>


    </div>
  );
};

export default Discover;