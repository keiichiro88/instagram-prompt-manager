import { useState, useCallback, useEffect } from 'react';
import { Prompt } from '../types';
import { samplePrompts } from '../data/samplePrompts';
import { storage } from '../lib/storage';

export const usePrompts = () => {
  const [prompts, setPrompts] = useState<Prompt[]>(() => {
    const savedPrompts = storage.loadPrompts();
    return savedPrompts || samplePrompts;
  });

  // プロンプトが変更されたらローカルストレージに保存
  useEffect(() => {
    storage.savePrompts(prompts);
  }, [prompts]);

  const handleSavePrompt = useCallback((
    promptData: Omit<Prompt, 'id' | 'createdAt' | 'updatedAt'>,
    editingPrompt?: Prompt
  ) => {
    if (editingPrompt) {
      setPrompts(prev => prev.map(p => 
        p.id === editingPrompt.id 
          ? { ...promptData, id: p.id, createdAt: p.createdAt, updatedAt: new Date() }
          : p
      ));
    } else {
      const newPrompt: Prompt = {
        ...promptData,
        id: Date.now().toString(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setPrompts(prev => [newPrompt, ...prev]);
    }
  }, []);

  const handleToggleFavorite = useCallback((id: string) => {
    setPrompts(prev => prev.map(p => 
      p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
    ));
  }, []);

  return {
    prompts,
    setPrompts,
    handleSavePrompt,
    handleToggleFavorite,
  };
};