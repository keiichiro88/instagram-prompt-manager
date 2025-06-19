import React, { useState } from 'react';
import { Wand2, Star, Copy } from 'lucide-react';
import { Prompt } from '../../types';

interface TemplateSelectorProps {
  templates: Prompt[];
  onSelectTemplate: (template: Prompt) => void;
  onClose: () => void;
}

export const TemplateSelector: React.FC<TemplateSelectorProps> = React.memo(({
  templates,
  onSelectTemplate,
  onClose,
}) => {
  const [selectedTemplate, setSelectedTemplate] = useState<Prompt | null>(null);

  const handleSelectTemplate = (template: Prompt) => {
    setSelectedTemplate(template);
    onSelectTemplate(template);
    onClose();
  };

  return (
    <div className="border rounded-lg bg-gray-50 p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-medium text-gray-900 flex items-center">
          <Wand2 className="w-4 h-4 mr-2" />
          テンプレートから開始
        </h4>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 text-sm"
        >
          非表示
        </button>
      </div>
      
      {templates.length === 0 ? (
        <p className="text-sm text-gray-500 italic">
          テンプレートがまだありません。プロンプトを作成時に「テンプレートとして保存」をチェックしてください。
        </p>
      ) : (
        <div className="grid gap-2 max-h-48 overflow-y-auto">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => handleSelectTemplate(template)}
              className="text-left p-3 bg-white rounded border hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h5 className="font-medium text-sm text-gray-900 flex items-center">
                    {template.title}
                    {template.isFavorite && (
                      <Star className="w-3 h-3 ml-1 text-yellow-500 fill-current" />
                    )}
                  </h5>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {template.content.substring(0, 100)}
                    {template.content.length > 100 && '...'}
                  </p>
                </div>
                <Copy className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
});