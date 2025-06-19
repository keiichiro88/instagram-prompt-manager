# CLAUDE.md - 開発ガイドライン

## 🎯 基本原則

Claude Codeとの協働において、以下の原則を必ず守ってください：

### コード品質基準
- **TypeScript strict mode** 必須
- **関数は5行以内**、ファイルは100行以内
- **単一責任の原則** を厳守
- **props型定義** 必須（any型禁止）

### 設計原則
- **再利用可能性** を最優先
- **パフォーマンス** を常に考慮
- **アクセシビリティ** 準拠
- **メンテナンス性** 重視

## 📁 プロジェクト構造規則

```
src/
├── app/                 # App Router（Next.js 13+）
├── components/
│   ├── ui/             # 基本UIコンポーネント
│   └── features/       # 機能別コンポーネント
├── lib/                # ユーティリティ・設定
├── types/              # 型定義
└── styles/             # スタイル関連
```

### 命名規則
- **ファイル**: kebab-case (`user-profile.tsx`)
- **コンポーネント**: PascalCase (`UserProfile`)
- **関数・変数**: camelCase (`getUserData`)
- **型**: PascalCase (`UserProfile`, `ApiResponse`)

## 🔧 実装ルール

### コンポーネント設計
```typescript
// ✅ 良い例
interface ButtonProps {
  variant: 'primary' | 'secondary'
  size: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
}

export const Button = ({ variant, size, children, onClick }: ButtonProps) => (
  <button 
    className={`btn btn-${variant} btn-${size}`}
    onClick={onClick}
  >
    {children}
  </button>
)
```

### パフォーマンス必須対応
- **React.memo** で不要な再レンダリング防止
- **useCallback** でコールバック最適化
- **レイジーローディング** で画像最適化
- **dynamic import** でコード分割

## 📋 依頼テンプレート

### 1. コンポーネント作成依頼
```
ベテランエンジニアとして、{ファイルパス} を設計してください：

制約：
- 100行以下、関数5行以下
- TypeScript strict、props型定義必須
- Tailwind CSS使用

要件：
- {具体的な機能要件}

設計原則：
- 単一責任、再利用可能、パフォーマンス考慮

提供：完全実装 + 型定義 + 使用例
```

### 2. レビュー依頼
```
以下をベテランエンジニア視点でレビューしてください：

観点：
1. コード品質・パフォーマンス
2. TypeScript活用度
3. React best practices
4. メンテナンス性

フィードバック：
- 改善点 + 具体的修正案
- 代替実装提案
```

### 3. 構造設計依頼
```
スケーラブルな構造を設計してください：

要件：
- App Router対応
- 大規模チーム開発
- パフォーマンス最適化

提供：
- ディレクトリ構造
- 命名規則
- 実装ガイドライン
```

## ⚡ パフォーマンスチェックリスト

実装時は以下を必ず確認：

- [ ] バンドルサイズ影響確認
- [ ] 不要な依存関係なし
- [ ] 適切なメモ化実装
- [ ] 画像最適化対応
- [ ] Core Web Vitals考慮

## 🛡️ セキュリティルール

- [ ] XSS対策（dangerouslySetInnerHTML禁止）
- [ ] 入力値検証実装
- [ ] 環境変数適切管理
- [ ] 認証・認可確認

## 🧪 テスト要件

新規実装時は以下を含む：

- [ ] ユニットテスト（Jest + RTL）
- [ ] 型安全性確認
- [ ] エラーハンドリングテスト
- [ ] アクセシビリティテスト

## 📝 コミット・PR規則

### コミットメッセージ
```
feat: add user profile component
fix: resolve performance issue in header
refactor: simplify auth logic
```

### PR要件
- [ ] 説明文に変更理由記載
- [ ] 破壊的変更の明示
- [ ] パフォーマンス影響評価
- [ ] テスト結果添付

---

**重要**: これらの規則はClaude Codeとの協働における約束事です。全ての実装・レビュー・設計において必ず遵守してください。