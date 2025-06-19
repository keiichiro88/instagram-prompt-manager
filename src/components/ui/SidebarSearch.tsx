import React from 'react';
import { Search } from 'lucide-react';

interface SidebarSearchProps {
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
}

export const SidebarSearch: React.FC<SidebarSearchProps> = React.memo(({ 
  searchQuery, 
  onSearchChange, 
  onSearchSubmit 
}) => (
  <div className="p-4 border-b border-gray-200 lg:border-b-0">
    <form onSubmit={onSearchSubmit} className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <input
        type="text"
        placeholder="プロンプトを検索してEnterキー..."
        value={searchQuery}
        onChange={onSearchChange}
        aria-label="プロンプトを検索"
        className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg border-none outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm font-medium"
      />
    </form>
  </div>
));