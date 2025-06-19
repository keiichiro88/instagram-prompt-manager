import { CustomCategory } from '../types';

export const defaultCategories: CustomCategory[] = [
  { id: 'writing', name: '文章作成', icon: 'MessageSquare', isDefault: true },
  { id: 'coding', name: 'プログラミング', icon: 'Code', isDefault: true },
  { id: 'creative', name: 'クリエイティブ', icon: 'Lightbulb', isDefault: true },
  { id: 'business', name: 'ビジネス', icon: 'Hash', isDefault: true },
];

export const availableIcons = [
  'MessageSquare', 'Code', 'Lightbulb', 'Hash', 'BookOpen', 'Star',
  'Heart', 'Zap', 'Target', 'Briefcase', 'PenTool', 'Camera',
  'Music', 'Gamepad2', 'Palette', 'Globe'
];