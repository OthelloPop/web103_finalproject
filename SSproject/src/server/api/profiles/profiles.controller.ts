import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createProfile = async (req: Request, res: Response) => {
  const { bannerImage, description, tags, userId } = req.body;
  const profile = await prisma.profile.create({
    data: {
      bannerImage,
      description,
      tags,
      userId
    }
  });
  res.json(profile);
};

const getProfiles = async (req: Request, res: Response) => {
  const profiles = await prisma.profile.findMany();
  res.json(profiles);
};

const getProfileByUserId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const profile = await prisma.profile.findUnique({
    where: { userId: Number(id) },
  });
  res.json(profile);
};

const updateProfileByUserId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { bannerImage, description, tags } = req.body;
  const profile = await prisma.profile.update({
    where: { userId: Number(id) },
    data: {
      bannerImage,
      description,
      tags
    }
  });
  res.json(profile);
};

const deleteProfileByUserId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const profile = await prisma.profile.delete({
    where: { userId: Number(id) },
  });
  res.json(profile);
};

export default {
    getProfiles,
    getProfileByUserId,
    createProfile,
    updateProfileByUserId,
    deleteProfileByUserId,
}