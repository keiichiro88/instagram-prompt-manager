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
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 px-6 py-2 flex items-center justify-between lg:hidden">
      {/* カテゴリ追加ボタン */}
      <button
        onClick={onNewCategory}
        className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
        aria-label="新しいカテゴリを追加"
      >
        <Folder className="w-5 h-5" />
      </button>

      {/* 新規プロンプトボタン */}
      <button
        onClick={onNewPrompt}
        className="flex items-center justify-center w-10 h-10 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all"
        aria-label="新しいプロンプトを作成"
      >
        <PenSquare className="w-5 h-5" />
      </button>
    </div>
  );
});