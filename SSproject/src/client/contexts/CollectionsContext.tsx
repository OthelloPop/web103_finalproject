import React, { createContext, useState } from 'react';

// Define the shape of the context data
interface Collection {
    id: number;
    name: string;
    description: string;
    userId: number;
}

interface CollectionsContextData {
    collections: Collection[];
    setCollections: React.Dispatch<React.SetStateAction<Collection[]>>;
}

// Create the context with default values
export const CollectionsContext = createContext<CollectionsContextData>({
    collections: [],
    setCollections: () => {},
});

// Create the provider component
export const CollectionsProvider: React.FC<React.PropsWithChildren<Record<string, never>>> = ({ children }) => {
    const [collections, setCollections] = useState<Collection[]>([]);

    return (
        <CollectionsContext.Provider value={{ collections, setCollections }}>
            {children}
        </CollectionsContext.Provider>
    );
};