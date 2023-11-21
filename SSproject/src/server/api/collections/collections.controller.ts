import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Add controller functions as needed for creating, updating, and deleting collections
const createCollection = async (req: Request, res: Response) => {
    const { name, description, userId } = req.body;

    // Create the new collection in the database
    const newCollection = await prisma.collection.create({
        data: { name, description, userId },
    });

    res.json(newCollection);
}

const getCollectionById = async (req: Request, res: Response) => {
    const { id } = req.params;

    // Check if id is defined and is a number
    if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: 'Invalid collection ID' });
    }

    // Fetch the collection from the database
    const collection = await prisma.collection.findUnique({
        where: { id: Number(id) },
    });

    res.json(collection);
}

const updateCollection = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description } = req.body;

    // Check if id is defined and is a number
    if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: 'Invalid collection ID' });
    }

    // Update the collection in the database
    const updatedCollection = await prisma.collection.update({
        where: { id: Number(id) },
        data: { name, description },
    });

    res.json(updatedCollection);
}

const deleteCollection = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description } = req.body;

    // Check if id is defined and is a number
    if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: 'Invalid collection ID' });
    }

    // Update the collection in the database
    const updatedCollection = await prisma.collection.update({
        where: { id: Number(id) },
        data: { name, description },
    });

    res.json(updatedCollection);
}

const getCollectionsByUserId = async (req: Request, res: Response) => {
    const { id } = req.params;

    // Check if user's id is defined and is a number
    if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: 'Invalid user ID' });
    }

    // Fetch collections for the user
    const collections = await prisma.collection.findMany({
        where: {
            userId: Number(id),
        },
    });

    res.json(collections);
}

export default {
    createCollection,
    getCollectionById,
    updateCollection,
    deleteCollection,
    getCollectionsByUserId,
}