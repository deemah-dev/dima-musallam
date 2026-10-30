import { Architechture } from './architechture';
import { Feature } from './feature';

export interface ProjectDetails {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  architechture?: Architechture;
  designPatterns?: string[];
  features: Feature[];
  githubUrl?: string;
  liveUrl?: string;
}
