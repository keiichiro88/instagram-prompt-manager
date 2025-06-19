import React from 'react';
import { Settings } from 'lucide-react';
import * as Icons from 'lucide-react';
import { CustomCategory } from '../../types';

interface SidebarNavigationProps {
  systemCategories: Array<{ id: string; name: string; icon: React.ComponentType<any>; count: number }>;
  categories: CustomCategory[];
  selectedCategory: string;
  getCategoryCount: (categoryId: string) => number;
  onCategorySelect: (categoryId: string) => void;
  onCategoryEdit: (category: CustomCategory, e: React.MouseEvent) => void;
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = React.memo(({
  systemCategories,
  categories,
  selectedCategory,
  getCategoryCount,
  onCategorySelect,
  onCategoryEdit,
}) => (
  <div className="flex-1 p-4 overflow-y-auto">
    <nav className="space-y-1">
      {/* システムカテゴリ */}
      {systemCategories.map((category) => {
        const IconComponent = category.icon;
        const isSelected = selectedCategory === category.id;
        
        return (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-all duration-200 ${
              isSelected
                ? 'bg-blue-500 text-white shadow-sm'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center space-x-3">
              <IconComponent className="w-4 h-4" />
              <span className="font-medium text-sm">{category.name}</span>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full ${
              isSelected ? 'bg-white bg-opacity-20' : 'bg-gray-200 text-gray-600'
            }`}>
              {category.count}
            </span>
          </button>
        );
      })}

      {/* 区切り線 */}
      {categories.length > 0 && (
        <div className="border-t border-gray-200 my-2"></div>
      )}

      {/* カスタムカテゴリ */}
      {categories.map((category) => {
        const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<any>;
        const isSelected = selectedCategory === category.id;
        const count = getCategoryCount(category.id);
        
        return (
          <div
            key={category.id}
            className={`group flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 ${
              isSelected
                ? 'bg-blue-500 text-white shadow-sm'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <button
              onClick={() => onCategorySelect(category.id)}
              className="flex-1 flex items-center space-x-3 text-left"
            >
              <IconComponent className="w-4 h-4" />
              <span className="font-medium text-sm">{category.name}</span>
            </button>
            
            <div className="flex items-center space-x-1">
              <span className={`text-xs px-2 py-1 rounded-full ${
                isSelected ? 'bg-white bg-opacity-20' : 'bg-gray-200 text-gray-600'
              }`}>
                {count}
              </span>
              <button
                onClick={(e) => onCategoryEdit(category, e)}
                className={`p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                  isSelected ? 'hover:bg-white hover:bg-opacity-20' : 'hover:bg-gray-200'
                }`}
              >
                <Settings className="w-3 h-3" />
              </button>
            </div>
          </div>
        );
      })}
    </nav>
  </div>
));