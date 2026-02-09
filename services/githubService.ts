import { Project } from '../types';
import { GITHUB_USERNAME } from '../constants';

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=6`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return [];
  }
};