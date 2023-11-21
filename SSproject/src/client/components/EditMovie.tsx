// EditMovie.tsx
import React, { useState } from 'react';
import { updateMovie } from '../api/moviesAPI';
import { Movie } from '../types';
import xtoClose from '../../assets/xtoClose.png'

interface EditMovieProps {
    show: boolean;
    onClose: () => void;
    onEditMovie: (updatedMovie: Movie) => void;
    movie: Movie;
}

const EditMovie: React.FC<EditMovieProps> = ({ show, onClose, onEditMovie, movie }) => {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [director, setDirector] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [description, setDescription] = useState('');
    const [runtime, setRuntime] = useState('');
    const [posterImage, setPosterImage] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        // Convert releaseDate string to Date object
        const releaseDateObj = new Date(`${releaseDate}T00:00:00`);

        // Convert releaseYear string to number, 10 for parsing as base 10
        const releaseYearNum = parseInt(releaseYear, 10);

        // Convert runtime string to number
        const runtimeNum = parseInt(runtime, 10);

        // Convert rating string to number
        const ratingNum = parseFloat(rating);

        // Call the API to update the movie
    const updatedMovie = await updateMovie(movie.id, {
        title,
        genre,
        director,
        releaseDate: releaseDateObj,
        releaseYear: releaseYearNum,
        description,
        runtime: runtimeNum,
        posterImage,
        rating: ratingNum
    });

    // Call the onEditMovie prop with the updated movie
    onEditMovie(updatedMovie);

        // Close the modal
        onClose();
    };

    if (!show) {
        return null;
    }

    return (
        // ... same JSX as NewMovie, but with "Edit Movie" instead of "New Movie" and "Update" instead of "Create"
        <div className="fixed inset-0 flex items-center justify-center overflow-auto">

        <div className="max-w-lg bg-gray-200 mt-60">
            <div className="flex justify-end">
                <button className="bg-red-600 p-1 m-2" onClick={onClose}>
                    <img src={xtoClose} alt="Close" className="w-6 h-6" />
                </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4 m-6 bg-white rounded shadow-md">

                <h2 className="text-2xl font-bold mb-4 text-gray-700">Edit Movie</h2>

                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="w-full p-2 mb-4 border-2 rounded border-gray-200" />
                <input value={genre} onChange={e => setGenre(e.target.value)} placeholder="Genre" className="w-full p-2 mb-4 border-2 rounded border-gray-200" />
                <input value={director} onChange={e => setDirector(e.target.value)} placeholder="Director" className="w-full p-2 mb-4 border-2 rounded border-gray-200" />
                <input value={releaseDate} onChange={e => setReleaseDate(e.target.value)} placeholder="YYYY-MM-DD" className="w-full p-2 mb-4 border-2 rounded border-gray-200" />
                <input value={releaseYear} onChange={e => setReleaseYear(e.target.value)} placeholder="Release Year" className="w-full p-2 mb-4 border-2 rounded border-gray-200" />
                <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" className="w-full p-2 mb-4 border-2 rounded border-gray-200" />
                <input value={runtime} onChange={e => setRuntime(e.target.value)} placeholder="Runtime" className="w-full p-2 mb-4 border-2 rounded border-gray-200" />
                <input value={posterImage} onChange={e => setPosterImage(e.target.value)} placeholder="Poster Image" className="w-full p-2 mb-4 border-2 rounded border-gray-200" />
                <input value={rating} onChange={e => setRating(e.target.value)} placeholder="Rating" className="w-full p-2 mb-4 border-2 rounded border-gray-200" />

                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded"
                >
                    Edit
                </button>
            </form>

        </div>


        </div>
    );
};

export default EditMovie;