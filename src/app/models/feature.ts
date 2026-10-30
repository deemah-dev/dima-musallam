import { Content } from './content';

export interface Feature {
  id: number;
  title: string;
  description?: string;
  content?: Content[];
}
