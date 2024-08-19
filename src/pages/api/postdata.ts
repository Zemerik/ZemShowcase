import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { banner, img, title, type, icon, blog, github, web, description, tags } = req.body;

    // Generate a unique URL by combining the title with a timestamp and a random number
    const timestamp = Date.now(); // Current timestamp in milliseconds
    const randomSuffix = Math.floor(Math.random() * 10000); // Random number between 0 and 9999
    const url = `${title.toLowerCase().replace(/\s+/g, '-')}-${timestamp}-${randomSuffix}`;

    try {
      const newProject = await prisma.project.create({
        data: {
          url,
          banner,
          img,
          title,
          type,
          icon,
          blog,
          github,
          web,
          description,
          tags,
        },
      })
      res.status(201).json({ message: 'Project created successfully' })
    } catch (error) {
      console.error('Error creating project:', error)
      res.status(500).json({ message: 'An error occurred while creating the project' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
