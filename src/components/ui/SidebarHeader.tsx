import React from 'react';
import { X } from 'lucide-react';

interface SidebarHeaderProps {
  onCloseSidebar?: () => void;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = React.memo(({ onCloseSidebar }) => (
  <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
    <h2 className="text-lg font-semibold text-gray-900">メニュー</h2>
    <button
      onClick={onCloseSidebar}
      aria-label="メニューを閉じる"
      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
    >
      <X className="w-5 h-5" />
    </button>
  </div>
));