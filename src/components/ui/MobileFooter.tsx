import React from 'react';
import { Folder, PenSquare } from 'lucide-react';

interface MobileFooterProps {
  onNewCategory: () => void;
  onNewPrompt: () => void;
}

export const MobileFooter: React.FC<MobileFooterProps> = React.memo(({
  onNewCategory,
  onNewPrompt,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-50 border-t border-gray-200 px-8 py-4 flex items-center justify-between lg:hidden shadow-lg">
      {/* カテゴリ追加ボタン */}
      <button
        onClick={onNewCategory}
        className="flex items-center justify-center w-12 h-12 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50 rounded-full transition-all"
        aria-label="新しいカテゴリを追加"
      >
        <Folder className="w-7 h-7" fill="currentColor" />
      </button>

      {/* 新規プロンプトボタン */}
      <button
        onClick={onNewPrompt}
        className="flex items-center justify-center w-12 h-12 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50 rounded-full transition-all"
        aria-label="新しいプロンプトを作成"
      >
        <PenSquare className="w-7 h-7" fill="currentColor" />
      </button>
    </div>
  );
});