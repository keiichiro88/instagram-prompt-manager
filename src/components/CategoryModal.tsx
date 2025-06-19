import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import * as Icons from 'lucide-react';
import { CustomCategory } from '../types';
import { availableIcons } from '../data/defaultCategories';

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (category: Omit<CustomCategory, 'id'>) => void;
  onDelete: (categoryId: string) => void;
  categories: CustomCategory[];
  editingCategory?: CustomCategory;
}

const CategoryModal: React.FC<CategoryModalProps> = ({
  isOpen,
  onClose,
  onSave,
  onDelete,
  categories,
  editingCategory
}) => {
  const [name, setName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('Hash');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    if (editingCategory) {
      setName(editingCategory.name);
      setSelectedIcon(editingCategory.icon);
    } else {
      setName('');
      setSelectedIcon('Hash');
    }
    setShowDeleteConfirm(false);
  }, [editingCategory, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSave({
        name: name.trim(),
        icon: selectedIcon,
        isDefault: false,
      });
      onClose();
    }
  };

  const handleDelete = () => {
    if (editingCategory && !editingCategory.isDefault) {
      onDelete(editingCategory.id);
      onClose();
    }
  };

  const canAddMore = categories.length < 8;
  const canDelete = editingCategory && !editingCategory.isDefault;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white bg-opacity-95 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">
            {editingCategory ? 'カテゴリを編集' : 'カテゴリを追加'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="categoryName" className="block text-sm font-semibold text-gray-700 mb-2">
              カテゴリ名
            </label>
            <input
              type="text"
              id="categoryName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
              placeholder="カテゴリ名を入力..."
              required
              maxLength={20}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              アイコン
            </label>
            <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto">
              {availableIcons.map((iconName) => {
                const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<any>;
                return (
                  <button
                    key={iconName}
                    type="button"
                    onClick={() => setSelectedIcon(iconName)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      selectedIcon === iconName
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <IconComponent className="w-5 h-5 mx-auto" />
                  </button>
                );
              })}
            </div>
          </div>

          {!canAddMore && !editingCategory && (
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                カテゴリは最大8個まで作成できます。
              </p>
            </div>
          )}

          <div className="flex items-center justify-between pt-4">
            <div>
              {canDelete && (
                <button
                  type="button"
                  onClick={() => setShowDeleteConfirm(true)}
                  className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>削除</span>
                </button>
              )}
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
              >
                キャンセル
              </button>
              <button
                type="submit"
                disabled={!canAddMore && !editingCategory}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 font-medium shadow-sm"
              >
                {editingCategory ? '更新' : '追加'}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* 削除確認ダイアログ */}
      {showDeleteConfirm && (
        <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">カテゴリを削除</h3>
            <p className="text-gray-600 mb-6">
              「{editingCategory?.name}」カテゴリを削除しますか？このカテゴリに属するプロンプトは「文章作成」カテゴリに移動されます。
            </p>
            <div className="flex items-center justify-end space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                キャンセル
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
              >
                削除
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryModal;