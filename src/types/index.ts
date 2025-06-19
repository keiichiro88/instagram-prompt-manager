export interface Prompt {
  id: string;
  title: string;
  content: string;
  category: string;
  isFavorite: boolean;
  isTemplate?: boolean;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  isDefault?: boolean;
}

export interface CustomCategory {
  id: string;
  name: string;
  icon: string;
  isDefault?: boolean;
}