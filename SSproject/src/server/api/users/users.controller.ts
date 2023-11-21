import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Add controller functions as needed for creating, updating, and deleting users
const createUser = async (req: Request, res: Response) => {
    const { name, email } = req.body;
    const user = await prisma.user.create({
        data: {
        name,
        email,
        Profile: {
            create: {
            bannerImage: '',
            description: 'I love movies and TV shows!',
            tags: 'movie-lover, tv-lover',
            }
        
        }
        }
    });
    res.json(user);
}

const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    include: {
         Profile: true 
    },
  });
  res.json(users);
};

const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
        where: { id: Number(id) },
        include: {
            Profile: true
        },
    });
    res.json(user);
}

const getUserByNameAndEmail = async (req: Request, res: Response) => {
    const { name, email } = req.query;
    const user = await prisma.user.findFirst({
        where: {
            name: String(name),
            email: String(email),
        },
        include: {
            Profile: true,
        },
    });
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
};

const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await prisma.user.update({
        where: { id: Number(id) },
        data: {
        name,
        email
        }
    });
    res.json(user);

}

const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await prisma.user.delete({
        where: { id: Number(id) }
    });
    res.json(user);

}

export default {
    getUsers,
    getUserById,
    getUserByNameAndEmail,
    createUser,
    updateUser,
    deleteUser,
}