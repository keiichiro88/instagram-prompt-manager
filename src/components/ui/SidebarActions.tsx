import React from 'react';
import { Plus } from 'lucide-react';

interface SidebarActionsProps {
  categoriesLength: number;
  onNewCategory: () => void;
  onNewPrompt: () => void;
  onCloseSidebar?: () => void;
}

export const SidebarActions: React.FC<SidebarActionsProps> = React.memo(({
  categoriesLength,
  onNewCategory,
  onNewPrompt,
  onCloseSidebar,
}) => (
  <div className="hidden lg:block p-4 border-t border-gray-200 space-y-2">
    {/* カテゴリ追加ボタン */}
    {categoriesLength < 8 && (
      <button
        onClick={() => {
          onNewCategory();
          if (onCloseSidebar) {
            onCloseSidebar();
          }
        }}
        className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium text-sm"
      >
        <Plus className="w-4 h-4" />
        <span>カテゴリを追加</span>
      </button>
    )}
    
    {/* 新しいプロンプトボタン */}
    <button
      onClick={() => {
        onNewPrompt();
        if (onCloseSidebar) {
          onCloseSidebar();
        }
      }}
      className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium text-sm shadow-sm"
    >
      <Plus className="w-4 h-4" />
      <span>新しいプロンプト</span>
    </button>
  </div>
));