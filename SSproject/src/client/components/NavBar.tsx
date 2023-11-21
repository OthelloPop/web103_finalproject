import React, { useState, useContext } from 'react';
import { Link, useNavigate, NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext'; // Import UserContext
import dropDownArrow from '../../assets/dropDownArrow.png';

function NavBar() {
    const [isCollectionsOpen, setCollectionsOpen] = useState(false);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const location = useLocation();
    const isCollectionsActive = ['/my-collections', '/new-collection'].includes(location.pathname);

    const handleLogout = () => {
        setUser(null);
        navigate('/');
    };
    return (
        <nav className="bg-yellow border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 left-0 w-full z-50">
            <div id="bar" className="max-w-screen-xl flex items-center justify-between mx-auto p-4 space-x-4">

                <div id="title" className="mr-8">

                    <Link to="/" className="flex items-center space-x-3">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="text-2xl font-semibold dark:text-white">StreamStash</span>
                    </Link>

                </div>
                <div id="Home">
                    <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            isActive ? "text-blue-700 dark:text-blue-300 px-4 py-2 rounded hover:bg-blue-700 hover:text-white underline" : "text-blue-700 dark:text-blue-500 px-4 py-2 rounded hover:bg-blue-700 hover:text-white"
                        }
                    >
                        Home
                    </NavLink>
                </div>
                <div id="Discover" className="relative">
                    <NavLink
                        to="/discover"
                        className={({ isActive }) =>
                            isActive ? "text-blue-700 dark:text-blue-300 px-4 py-2 rounded hover:bg-blue-700 hover:text-white underline" : "text-blue-700 dark:text-blue-500 px-4 py-2 rounded hover:bg-blue-700 hover:text-white"
                        }
                    >
                        Discover
                    </NavLink>
                </div>
                <div id="Collections" className="relative">
                    <button 
                        onClick={() => setCollectionsOpen(!isCollectionsOpen)}
                        className={`flex items-center ${isCollectionsActive ? "text-blue-700 dark:text-blue-300 py-2 rounded hover:bg-blue-700 hover:text-white underline" : "text-blue-700 dark:text-blue-500 py-2 rounded hover:bg-blue-700 hover:text-white"}`}
                    >
                        Collections
                        <img src={ dropDownArrow } alt="Dropdown icon" className="h-4 ml-2"/>
                    </button>
                    
                    {isCollectionsOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                            <Link to="/my-collections" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Collections</Link>
                            <Link to="/new-collection" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">New Collection</Link>
                        </div>
                    )}
                </div>
                <div id="Profile">
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive ? "text-blue-700 dark:text-blue-300 px-4 py-2 rounded hover:bg-blue-700 hover:text-white underline" : "text-blue-700 dark:text-blue-500 px-4 py-2 rounded hover:bg-blue-700 hover:text-white"
                        }
                    >
                        Profile
                    </NavLink>
                </div>
                <div id="Logout">
                    <button onClick={handleLogout} className="text-blue-700 dark:text-blue-500 px-4 py-2 rounded hover:bg-blue-700 hover:text-white">Logout</button>
                </div>

            </div>
        </nav>

    );
}

export default NavBar;