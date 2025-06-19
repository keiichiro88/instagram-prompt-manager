import { useState, useCallback } from 'react';
import { CustomCategory } from '../types';
import { defaultCategories } from '../data/defaultCategories';

export const useCategories = () => {
  const [categories, setCategories] = useState<CustomCategory[]>(defaultCategories);

  const handleSaveCategory = useCallback((
    categoryData: Omit<CustomCategory, 'id'>,
    editingCategory?: CustomCategory
  ) => {
    if (editingCategory) {
      setCategories(prev => prev.map(c => 
        c.id === editingCategory.id 
          ? { ...categoryData, id: c.id }
          : c
      ));
    } else {
      const newCategory: CustomCategory = {
        ...categoryData,
        id: Date.now().toString(),
      };
      setCategories(prev => [...prev, newCategory]);
    }
  }, []);

  const handleDeleteCategory = useCallback((categoryId: string, setSelectedCategory: (cat: string) => void, selectedCategory: string, setPrompts: any) => {
    setCategories(prev => prev.filter(c => c.id !== categoryId));
    
    setPrompts(prev => prev.map(p => 
      p.category === categoryId ? { ...p, category: 'writing' } : p
    ));
    
    if (selectedCategory === categoryId) {
      setSelectedCategory('all');
    }
  }, []);

  return {
    categories,
    handleSaveCategory,
    handleDeleteCategory,
  };
};