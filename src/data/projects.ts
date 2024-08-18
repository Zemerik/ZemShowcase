import { Project } from "../types/Project";

export const getProjects = async () => {
  try {
    const response = await fetch('/api/projects');
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

export const getProject = async (url: any) => {
  try {
    const response = await fetch('/api/projects');
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const data: Project[] = await response.json(); // Ensure the type is Project[]
    
    // Find the project with the matching URL
    const project = data.find((project) => project.url === url) || null;
    return project;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return null;
  }
};
