# 🚀 Instagram Prompt Manager

> AIプロンプトを効率的に管理・整理するためのモダンなWebアプリケーション

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ 特徴

### 🎯 主な機能
- **📝 プロンプト管理** - AIプロンプトの作成・編集・削除
- **🗂️ カテゴリ整理** - カスタムカテゴリーでの分類管理
- **⭐ お気に入り** - 重要なプロンプトをお気に入り登録
- **🔍 高速検索** - タイトル・内容での即座検索
- **📱 レスポンシブ** - デスクトップ・モバイル完全対応

### 🎨 デザイン
- **🔮 モダンUI** - Tailwind CSSによる美しいデザイン
- **🌟 ガラス風効果** - 半透明の洗練されたインターフェース
- **⚡ スムーズアニメーション** - 直感的な操作感
- **🌓 アクセシビリティ** - 画面読み上げソフト対応

## 🛠️ 技術スタック

### フロントエンド
- **React 18** - 最新のReactフレームワーク
- **TypeScript** - 型安全性とコード品質
- **Vite** - 高速ビルドツール
- **Tailwind CSS** - ユーティリティファーストCSS

### 開発品質
- **ESLint** - コード品質管理
- **React.memo** - パフォーマンス最適化
- **カスタムフック** - ロジック再利用
- **アクセシビリティ** - ARIA属性対応

## 🚀 クイックスタート

### 前提条件
- Node.js 18.0.0 以上
- npm または yarn

### インストール

\`\`\`bash
# リポジトリをクローン
git clone https://github.com/keiichiro88/instagram-prompt-manager.git

# ディレクトリに移動
cd instagram-prompt-manager

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
\`\`\`

### ビルド

\`\`\`bash
# 本番用ビルド
npm run build

# ビルド結果をプレビュー
npm run preview
\`\`\`

## 📁 プロジェクト構造

\`\`\`
src/
├── components/          # Reactコンポーネント
│   ├── ui/             # 再利用可能なUIコンポーネント
│   ├── Sidebar.tsx     # サイドバーコンポーネント
│   ├── ContentArea.tsx # メインコンテンツエリア
│   └── PromptCard.tsx  # プロンプトカード
├── hooks/              # カスタムフック
│   ├── usePrompts.ts   # プロンプト管理ロジック
│   ├── useCategories.ts # カテゴリ管理ロジック
│   └── useModals.ts    # モーダル管理ロジック
├── data/               # サンプルデータ
├── types/              # TypeScript型定義
└── App.tsx             # メインアプリケーション
\`\`\`

## 🎯 使用方法

### 1️⃣ プロンプト作成
1. 「新しいプロンプト」ボタンをクリック
2. タイトルと内容を入力
3. カテゴリを選択
4. 保存をクリック

### 2️⃣ カテゴリ管理
1. 「カテゴリを追加」ボタンをクリック
2. カテゴリ名とアイコンを選択
3. 保存してカスタムカテゴリを作成

### 3️⃣ 検索・フィルタリング
- 検索バーでプロンプトを検索
- カテゴリをクリックでフィルタリング
- お気に入りマークで重要なプロンプトを管理

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (\`git checkout -b feature/AmazingFeature\`)
3. 変更をコミット (\`git commit -m 'Add some AmazingFeature'\`)
4. ブランチにプッシュ (\`git push origin feature/AmazingFeature\`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🙏 謝辞

- [Lucide React](https://lucide.dev/) - 美しいアイコンライブラリ
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストCSS
- [Vite](https://vitejs.dev/) - 次世代ビルドツール

---

⭐ このプロジェクトが役に立ったら、ぜひスターをお願いします！