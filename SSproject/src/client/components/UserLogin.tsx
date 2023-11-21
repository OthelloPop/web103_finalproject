import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { getUserByNameAndEmail } from '../api/usersAPI';

function UserLogin() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const user = await getUserByNameAndEmail(username, email);
            setUser({ id: user.id, name: user.name, email: user.email });
            setError(false);
            navigate('/home'); // Redirect to home page
        } catch (error) {
            console.error('Failed to log in', error);
            setError(true);
        }

        console.log('user', user);
    };

    return (
        <div className="flex max-w-md items-center justify-center bg-gray-200 ml-[550px]">
            <form
                onSubmit={handleSubmit}
                className="p-6 m-4 bg-white rounded shadow-md"
            >
                <h2 className="text-2xl font-bold mb-4 text-gray-700">Log in</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={`w-full p-2 mb-4 border-2 rounded ${
                        error ? 'border-red-500' : 'border-gray-200'
                    }`}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full p-2 mb-4 border-2 rounded ${
                        error ? 'border-red-500' : 'border-gray-200'
                    }`}
                />
                {error && (
                    <p className="mb-4 text-red-500">Invalid username or email</p>
                )}
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded"
                >
                    Log in
                </button>
            </form>
        </div>
    );
}

export default UserLogin;