import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../api/usersAPI';

function SignUp() {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          await createUser({ name: username, email }); // Create the user but don't set the context
          navigate('/login'); // Redirect to login page
        } catch (error) {
          console.error('Failed to sign up', error);
        }
      };

    return (
        <div className="flex max-w-md items-center justify-center bg-gray-200">
            <form
                onSubmit={handleSubmit}
                className="p-6 m-4 bg-white rounded shadow-md"
            >
                <h2 className="text-2xl font-bold mb-4 text-gray-700">Sign Up</h2>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 mb-4 border-2 rounded border-gray-200"
                />
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-4 border-2 rounded border-gray-200"
                />
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default SignUp;