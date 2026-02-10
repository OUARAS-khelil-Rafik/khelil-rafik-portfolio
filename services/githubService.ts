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
    
    // Ensure data is an array and map to Project interface to handle potential null values
    if (!Array.isArray(data)) {
      return [];
    }

    return data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || '',
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count,
      language: repo.language || 'Unknown',
      topics: repo.topics || []
    }));
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return [];
  }
};