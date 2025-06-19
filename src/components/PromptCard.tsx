import React, { useState } from 'react';
import { Star, Copy, Edit3, Check } from 'lucide-react';
import { Prompt, CustomCategory } from '../types';

interface PromptCardProps {
  prompt: Prompt;
  categories: CustomCategory[];
  onEdit: (prompt: Prompt) => void;
  onToggleFavorite: (id: string) => void;
}

const PromptCard: React.FC<PromptCardProps> = React.memo(({ prompt, categories, onEdit, onToggleFavorite }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
  };

  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {prompt.title}
          </h3>
          <button
            onClick={() => onToggleFavorite(prompt.id)}
            aria-label={prompt.isFavorite ? 'お気に入りから削除' : 'お気に入りに追加'}
            className={`p-1 rounded-full transition-colors duration-200 ${
              prompt.isFavorite ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
            }`}
          >
            <Star className={`w-5 h-5 ${prompt.isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {truncateText(prompt.content, 150)}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {getCategoryName(prompt.category)}
            </span>
            <span className="text-xs text-gray-400">
              {prompt.updatedAt.toLocaleDateString('ja-JP')}
            </span>
          </div>
          
          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={handleCopy}
              className="flex items-center space-x-1 px-3 py-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200 text-sm font-medium"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'コピー済み' : 'コピー'}</span>
            </button>
            <button
              onClick={() => onEdit(prompt)}
              className="flex items-center space-x-1 px-3 py-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200 text-sm font-medium"
            >
              <Edit3 className="w-4 h-4" />
              <span>編集</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PromptCard;