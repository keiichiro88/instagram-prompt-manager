import { useState, useCallback } from 'react';
import { Prompt, CustomCategory } from '../types';

export const useModals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [editingPrompt, setEditingPrompt] = useState<Prompt | undefined>();
  const [editingCategory, setEditingCategory] = useState<CustomCategory | undefined>();

  const handleNewPrompt = useCallback(() => {
    setEditingPrompt(undefined);
    setIsModalOpen(true);
  }, []);

  const handleEditPrompt = useCallback((prompt: Prompt) => {
    setEditingPrompt(prompt);
    setIsModalOpen(true);
  }, []);

  const handleNewCategory = useCallback(() => {
    setEditingCategory(undefined);
    setIsCategoryModalOpen(true);
  }, []);

  const handleEditCategory = useCallback((category: CustomCategory) => {
    setEditingCategory(category);
    setIsCategoryModalOpen(true);
  }, []);

  return {
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
  };
};