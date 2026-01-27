
export interface ProcessImage {
  url: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  // Case Study fields
  role?: string;
  timeline?: string;
  tools?: string[];
  concept?: string;
  gridDesc?: string;
  processGallery?: ProcessImage[];
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
