import React, { createContext, useState } from 'react';

// Define the shape of the context data
interface User {
  id: number;
  name: string;
  email: string;
}

interface UserContextData {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Create the context with default values
export const UserContext = createContext<UserContextData>({
  user: null,
  setUser: () => {},
});

// Create the provider component
export const UserProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};