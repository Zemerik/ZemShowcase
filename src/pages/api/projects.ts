import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const projects = await prisma.project.findMany();
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error retrieving projects:", error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  } finally {
    await prisma.$disconnect();
  }
}