import React from 'react';
import PromptCard from './PromptCard';
import { Prompt, CustomCategory } from '../types';

interface ContentAreaProps {
  prompts: Prompt[];
  categories: CustomCategory[];
  selectedCategory: string;
  searchQuery: string;
  onEditPrompt: (prompt: Prompt) => void;
  onToggleFavorite: (id: string) => void;
}

const ContentArea: React.FC<ContentAreaProps> = React.memo(({
  prompts,
  categories,
  selectedCategory,
  searchQuery,
  onEditPrompt,
  onToggleFavorite,
}) => {
  const filteredPrompts = prompts.filter((prompt) => {
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prompt.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === 'all') return matchesSearch;
    if (selectedCategory === 'favorites') return matchesSearch && prompt.isFavorite;
    return matchesSearch && prompt.category === selectedCategory;
  });

  const getCategoryTitle = () => {
    switch (selectedCategory) {
      case 'all': return 'すべてのプロンプト';
      case 'favorites': return 'お気に入り';
      default: {
        const category = categories.find(c => c.id === selectedCategory);
        return category ? category.name : 'プロンプト';
      }
    }
  };

  return (
    <div className="flex-1 bg-white overflow-y-auto">
      <div className="p-8 pb-24 lg:pb-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {getCategoryTitle()}
          </h1>
          <p className="text-gray-600">
            {filteredPrompts.length}件のプロンプト
            {searchQuery && ` 「${searchQuery}」に一致`}
          </p>
        </div>

        {filteredPrompts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">プロンプトが見つかりません</h3>
            <p className="text-gray-600">
              {searchQuery ? '検索条件を変更してみてください。' : '最初のプロンプトを作成して始めましょう。'}
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredPrompts.map((prompt) => (
              <PromptCard
                key={prompt.id}
                prompt={prompt}
                categories={categories}
                onEdit={onEditPrompt}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

export default ContentArea;