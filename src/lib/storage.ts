import { Prompt, CustomCategory } from '../types';

const STORAGE_KEYS = {
  PROMPTS: 'instagram-prompt-manager-prompts',
  CATEGORIES: 'instagram-prompt-manager-categories',
  SETTINGS: 'instagram-prompt-manager-settings',
} as const;

export const storage = {
  // プロンプトの保存・読み込み
  savePrompts: (prompts: Prompt[]): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROMPTS, JSON.stringify(prompts));
    } catch (error) {
      console.error('プロンプトの保存に失敗しました:', error);
    }
  },

  loadPrompts: (): Prompt[] | null => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROMPTS);
      if (!data) return null;
      
      const prompts = JSON.parse(data);
      return prompts.map((p: any) => ({
        ...p,
        createdAt: new Date(p.createdAt),
        updatedAt: new Date(p.updatedAt),
      }));
    } catch (error) {
      console.error('プロンプトの読み込みに失敗しました:', error);
      return null;
    }
  },

  // カテゴリの保存・読み込み
  saveCategories: (categories: CustomCategory[]): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
    } catch (error) {
      console.error('カテゴリの保存に失敗しました:', error);
    }
  },

  loadCategories: (): CustomCategory[] | null => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('カテゴリの読み込みに失敗しました:', error);
      return null;
    }
  },

  // データのクリア
  clearAll: (): void => {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  },
};