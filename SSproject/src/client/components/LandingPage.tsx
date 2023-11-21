import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-auto">
      <div className="max-w-lg bg-gray-200">
        <div className="p-4 m-6 bg-white rounded shadow-md">
          <h1 className="text-3xl font-bold underline bg-blue-300">
            Hello User
          </h1>
          <button className="custom-button bg-[#1a1a1a] w-full p-2 rounded mt-4" onClick={() => navigate('/login')}>Login</button>
          <button className="custom-button bg-[#1a1a1a] w-full p-2 rounded mt-4" onClick={() => navigate('/signUp')}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;