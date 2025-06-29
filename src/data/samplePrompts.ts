import { Prompt } from '../types';

export const samplePrompts: Prompt[] = [
  {
    id: '1',
    title: 'クリエイティブストーリーの始まり',
    content: '次の文章から始まる魅力的な物語を書いてください：「地球最後の人間が一人で部屋に座っていた。そのとき、ドアをノックする音が聞こえた。」予想外の展開と豊かなキャラクター描写で物語を発展させてください。',
    category: 'writing',
    isFavorite: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: 'Reactコンポーネント最適化',
    content: '以下のReactコンポーネントを分析し、パフォーマンス、アクセシビリティ、コードの保守性の観点から最適化を提案してください。フックの使用法、メモ化の機会、ベストプラクティスに焦点を当ててください。',
    category: 'coding',
    isFavorite: false,
    createdAt: new Date('2024-01-14'),
    updatedAt: new Date('2024-01-16'),
  },
  {
    id: '3',
    title: 'ビジネス戦略フレームワーク',
    content: '持続可能技術市場に参入するスタートアップのための包括的なビジネス戦略フレームワークを作成してください。市場分析、競合ポジショニング、成長戦術を含めてください。',
    category: 'business',
    isFavorite: true,
    createdAt: new Date('2024-01-13'),
    updatedAt: new Date('2024-01-17'),
  },
  {
    id: '4',
    title: 'キャラクター開発の深掘り',
    content: '詳細な背景、動機、欠点、成長の軌跡を持つ複雑で三次元的なキャラクターを開発してください。性格特性、人間関係、物語を通じてどのように変化するかを含めてください。',
    category: 'creative',
    isFavorite: false,
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12'),
  },
  {
    id: '5',
    title: 'コードレビューチェックリスト',
    content: 'セキュリティ脆弱性、パフォーマンスのボトルネック、コードスタイルの一貫性、エラーハンドリング、ドキュメントの品質に焦点を当てた徹底的なコードレビューを実行してください。実行可能なフィードバックを提供してください。',
    category: 'coding',
    isFavorite: true,
    createdAt: new Date('2024-01-11'),
    updatedAt: new Date('2024-01-18'),
  },
  {
    id: '6',
    title: 'メールマーケティングキャンペーン',
    content: '生産性ソフトウェアツールの新規購読者向けの5通のナーチャリングメールシーケンスを設計してください。件名、CTA、エンゲージメントとコンバージョンを最大化するパーソナライゼーション戦略を含めてください。',
    category: 'business',
    isFavorite: false,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
  },
  {
    id: '7',
    title: '技術文書作成ガイド',
    content: 'エンドポイント、認証、リクエスト/レスポンス例、エラーコード、複数のプログラミング言語でのSDK使用例を含むREST APIの包括的な技術文書を作成してください。',
    category: 'writing',
    isFavorite: true,
    createdAt: new Date('2024-01-09'),
    updatedAt: new Date('2024-01-19'),
  },
  {
    id: '8',
    title: 'ブランドボイス開発',
    content: 'テクノロジースタートアップのための独特なブランドボイスとトーンガイドを確立してください。性格特性、コミュニケーションスタイル、語彙の好み、異なるコンテンツタイプの例を定義してください。',
    category: 'creative',
    isFavorite: false,
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-08'),
  },
];