import React, {useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { getCollectionsByUserId, getUserByNameAndEmail } from '../api/usersAPI';
import { addMovieToCollection } from '../api/collectionMoviesAPI';
import { UserContext } from '../contexts/UserContext';
import dropDownArrow from '../../assets/dropDownArrow.png'; // replace with the actual path to your image

const AddToCollection = () => {

    const [collections, setCollections] = useState<{ id: number, name: string }[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(UserContext);
    const { id: movieId } = useParams<{ id: string }>();
    console.log('Movieid:',  movieId);

    useEffect(() => {
        const fetchCollections = async () => {
        if(user) {
            const wholeUser = await getUserByNameAndEmail(user.name, user.email); 
            const userCollections = await getCollectionsByUserId(wholeUser.id);
            console.log(userCollections);
            
            const collectionNames = userCollections.map(collection => ({id: collection.id, name: collection.name}));
            setCollections(collectionNames);
        }
        };

        fetchCollections();
    }, [user]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxClick = async (collectionId: number) => {
        if(user && movieId) {
            console.log(`collectionId: ${collectionId}, movieId: ${movieId}`);
          await addMovieToCollection(collectionId, parseInt(movieId), false); // or true, depending on whether the movie is watched or not
          const wholeUser = await getUserByNameAndEmail(user.name, user.email); 
            const userCollections = await getCollectionsByUserId(wholeUser.id);
            console.log(userCollections);
        }
    };

    return (
        <div className="relative inline-block text-left">
            <button onClick={toggleDropdown} className="flex items-center mx-2 custom-button bg-[#1a1a1a]">
                Add to Collection
                <img src={dropDownArrow} alt="Add Icon" className="h-4 ml-2"/>
            </button>
            {isOpen && (
                <div className="origin-top-right absolute right-2 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {collections.map((collection, index) => (
                        <label key={index} className="block pl-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                            <input type="checkbox" className="mr-2" onChange={() => handleCheckboxClick(collection.id)}/>
                            {collection.name}
                        </label>
                    ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddToCollection;