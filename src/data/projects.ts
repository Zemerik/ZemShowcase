import { Project } from "../types/Project";
import prisma from "../utils/db";


export async function getProjects(){
  try {
    // Fetching projects from the database
    const projects = await prisma.project.findMany();
    return projects;
  } catch (error) {
    // Logging and rethrowing the error for further handling
    console.error("Error retrieving projects:", error);
    return []
  }
}