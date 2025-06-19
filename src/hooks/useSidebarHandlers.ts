import { useCallback } from 'react';
import { CustomCategory } from '../types';

interface UseSidebarHandlersProps {
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  onEditCategory: (category: CustomCategory) => void;
  onCloseSidebar?: () => void;
  selectedCategory: string;
}

export const useSidebarHandlers = ({
  setSelectedCategory,
  setSearchQuery,
  onEditCategory,
  onCloseSidebar,
  selectedCategory,
}: UseSidebarHandlersProps) => {
  const handleCategorySelect = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    if (onCloseSidebar) {
      onCloseSidebar();
    }
  }, [setSelectedCategory, onCloseSidebar]);

  const handleCategoryEdit = useCallback((category: CustomCategory, e: React.MouseEvent) => {
    e.stopPropagation();
    onEditCategory(category);
  }, [onEditCategory]);

  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSelectedCategory('all');
    if (onCloseSidebar) {
      onCloseSidebar();
    }
  }, [setSelectedCategory, onCloseSidebar]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    if (value.trim() && selectedCategory !== 'all') {
      setSelectedCategory('all');
    }
  }, [setSearchQuery, selectedCategory, setSelectedCategory]);

  return {
    handleCategorySelect,
    handleCategoryEdit,
    handleSearchSubmit,
    handleSearchChange,
  };
};