import React, { useRef } from 'react';
import { Download, Upload, X } from 'lucide-react';
import { storage } from '../../lib/storage';

interface ExportImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (data: any) => void;
}

export const ExportImportModal: React.FC<ExportImportModalProps> = React.memo(({
  isOpen,
  onClose,
  onImport,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleExport = () => {
    const data = storage.exportData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { 
      type: 'application/json' 
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `prompt-manager-backup-${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        if (storage.importData(data)) {
          onImport(data);
          onClose();
          alert('データのインポートが完了しました！');
        } else {
          alert('データのインポートに失敗しました。');
        }
      } catch (error) {
        alert('無効なファイル形式です。');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            データの管理
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
              <Download className="w-4 h-4 mr-2" />
              データをエクスポート
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              現在のプロンプトとカテゴリをJSONファイルとしてダウンロードします。
            </p>
            <button
              onClick={handleExport}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
            >
              <Download className="w-4 h-4 mr-2" />
              エクスポート
            </button>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
              <Upload className="w-4 h-4 mr-2" />
              データをインポート
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              以前にエクスポートしたJSONファイルからデータを復元します。
            </p>
            <button
              onClick={handleImportClick}
              className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center"
            >
              <Upload className="w-4 h-4 mr-2" />
              インポート
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            ⚠️ インポートすると現在のデータは上書きされます
          </p>
        </div>
      </div>
    </div>
  );
});