import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import PromptModal from './components/PromptModal';
import CategoryModal from './components/CategoryModal';
import { usePrompts } from './hooks/usePrompts';
import { useCategories } from './hooks/useCategories';
import { useModals } from './hooks/useModals';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { prompts, setPrompts, handleSavePrompt, handleToggleFavorite } = usePrompts();
  const { categories, handleSaveCategory, handleDeleteCategory } = useCategories();

  const {
    isModalOpen,
    setIsModalOpen,
    isCategoryModalOpen,
    setIsCategoryModalOpen,
    editingPrompt,
    editingCategory,
    handleNewPrompt,
    handleEditPrompt,
    handleNewCategory,
    handleEditCategory,
  } = useModals();

  const onSavePrompt = useCallback((promptData: any) => {
    handleSavePrompt(promptData, editingPrompt);
  }, [handleSavePrompt, editingPrompt]);

  const onSaveCategory = useCallback((categoryData: any) => {
    handleSaveCategory(categoryData, editingCategory);
  }, [handleSaveCategory, editingCategory]);

  const onDeleteCategory = useCallback((categoryId: string) => {
    handleDeleteCategory(categoryId, setSelectedCategory, selectedCategory, setPrompts);
  }, [handleDeleteCategory, selectedCategory]);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen]);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* ウィンドウタイトルバー */}
      <div className="bg-white bg-opacity-80 backdrop-blur-xl border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center">
          {/* モバイル用ハンバーガーメニュー */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200 ml-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-sm font-semibold text-gray-700">プロンプト管理</h1>
        </div>
        <div className="w-12 lg:w-0"></div> {/* タイトルを中央に配置するためのスペーサー */}
      </div>

      {/* メインコンテンツ */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* サイドバーオーバーレイ（モバイル用） */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={closeSidebar}
          />
        )}
        
        {/* サイドバー */}
        <div className={`
          fixed lg:relative inset-y-0 left-0 z-50 lg:z-auto
          transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
          transition-transform duration-300 ease-in-out lg:transition-none
        `}>
          <Sidebar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
            prompts={prompts}
            onNewPrompt={handleNewPrompt}
            onNewCategory={handleNewCategory}
            onEditCategory={handleEditCategory}
            onCloseSidebar={closeSidebar}
          />
        </div>
        
        <ContentArea
          prompts={prompts}
          categories={categories}
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          onEditPrompt={handleEditPrompt}
          onToggleFavorite={handleToggleFavorite}
        />
      </div>

      {/* プロンプトモーダル */}
      <PromptModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={onSavePrompt}
        categories={categories}
        prompt={editingPrompt}
      />

      {/* カテゴリモーダル */}
      <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        onSave={onSaveCategory}
        onDelete={onDeleteCategory}
        categories={categories}
        editingCategory={editingCategory}
      />
    </div>
  );
}

export default App;