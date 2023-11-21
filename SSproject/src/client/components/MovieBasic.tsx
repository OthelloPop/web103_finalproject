import React, { useState } from 'react';
import { Movie as MovieType } from '../types';

interface MovieBasicProps {
  movie: MovieType;
}

const MovieBasic: React.FC<MovieBasicProps> = ({ movie }) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative border-solid border-4 bg-grey-400 border-yellow-600 h-96 w-64 hover:border-6 my-6">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out hover:blur-sm hover:brightness-50" 
          style={{
            backgroundImage: `url(${movie.posterImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center'  
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        ></div>
      </div>
      {isHovered && (
        <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 opacity-100 transition-opacity duration-500">
          <h2 className="font-bold text-4xl hover:text-gray-500">View</h2>
        </div>
      )}
    </div>
  );
};

export default MovieBasic;