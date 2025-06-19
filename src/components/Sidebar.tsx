import React, { useMemo } from 'react';
import { Star, BookOpen } from 'lucide-react';
import { CustomCategory, Prompt } from '../types';
import { SidebarHeader } from './ui/SidebarHeader';
import { SidebarSearch } from './ui/SidebarSearch';
import { SidebarNavigation } from './ui/SidebarNavigation';
import { SidebarActions } from './ui/SidebarActions';
import { useSidebarHandlers } from '../hooks/useSidebarHandlers';

interface SidebarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: CustomCategory[];
  prompts: Prompt[];
  onNewPrompt: () => void;
  onNewCategory: () => void;
  onEditCategory: (category: CustomCategory) => void;
  onOpenExportImport: () => void;
  onCloseSidebar?: () => void;
}

const Sidebar: React.FC<SidebarProps> = React.memo(({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
  prompts,
  onNewPrompt,
  onNewCategory,
  onEditCategory,
  onOpenExportImport,
  onCloseSidebar,
}) => {
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return prompts.length;
    if (categoryId === 'favorites') return prompts.filter(p => p.isFavorite).length;
    return prompts.filter(p => p.category === categoryId).length;
  };

  const systemCategories = useMemo(() => [
    { id: 'all', name: 'すべてのプロンプト', icon: BookOpen, count: getCategoryCount('all') },
    { id: 'favorites', name: 'お気に入り', icon: Star, count: getCategoryCount('favorites') },
  ], [prompts]);

  const {
    handleCategorySelect,
    handleCategoryEdit,
    handleSearchSubmit,
    handleSearchChange,
  } = useSidebarHandlers({
    setSelectedCategory,
    setSearchQuery,
    onEditCategory,
    onCloseSidebar,
    selectedCategory,
  });

  return (
    <div className="w-80 bg-white bg-opacity-80 backdrop-blur-xl border-r border-gray-200 flex flex-col h-full">
      <SidebarHeader onCloseSidebar={onCloseSidebar} />
      
      <SidebarSearch
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />
      
      <SidebarNavigation
        systemCategories={systemCategories}
        categories={categories}
        selectedCategory={selectedCategory}
        getCategoryCount={getCategoryCount}
        onCategorySelect={handleCategorySelect}
        onCategoryEdit={handleCategoryEdit}
      />
      
      <SidebarActions
        categoriesLength={categories.length}
        onNewCategory={onNewCategory}
        onNewPrompt={onNewPrompt}
        onOpenExportImport={onOpenExportImport}
        onCloseSidebar={onCloseSidebar}
      />
    </div>
  );
});

export default Sidebar;