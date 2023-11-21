// DeleteMovie.tsx
import React from 'react';
import { Movie } from '../types';
import { deleteMovie } from '../api/moviesAPI';
import xtoClose from '../../assets/xtoClose.png';

interface DeleteMovieProps {
    show: boolean;
    onClose: () => void;
    onDelete: () => void;
    movie: Movie;
}

const DeleteMovie: React.FC<DeleteMovieProps> = ({ show, onClose, movie }) => {
    if (!show) {
        return null;
    }

    const handleDelete = async () => {
        await deleteMovie(movie.id);
        onClose();
    };

        return (
            <div className="fixed inset-0 flex items-center justify-center overflow-auto">
                <div className="max-w-lg bg-gray-200 mt-60">
                    <div className="flex justify-end">
                        <button className="bg-red-600 p-1 m-2" onClick={onClose}>
                            <img src={xtoClose} alt="Close" className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="p-4 m-6 bg-white rounded shadow-md">
                        <h2 className="text-2xl font-bold mb-4 text-gray-700">Delete Movie</h2>
                        <h1 className="text-xl font-bold mb-4 text-gray-700">This can't be undone!</h1>
                        <button onClick={handleDelete} className="w-full p-2 bg-blue-500 text-white rounded mt-4">Confirm</button>
                        <button onClick={onClose} className="w-full p-2 bg-red-500 text-white rounded mt-4">Cancel</button>
                    </div>
                </div>
            </div>
        );
};

export default DeleteMovie;