# インターンシップ・プログラム（テクノロジーコンサルティング体験）

DXC テクノロジージャパンのインターンシップ用プログラム一式です。
**大学2年生・IT初心者**を対象に、**1.5日間**で「DXCのテクノロジーコンサルタント＆エンジニアの仕事」を就業体験できる設計になっています。

---

## 🎯 このインターンの核

> 「社員のITスキルを常に最新の状態に保ちたい」—— ある会社のお客様から寄せられた相談に、学生が DXCのコンサルタント＆エンジニアとして挑む。
> 企業の内製化支援・人材育成を行うテクノロジーコンサルタントの仕事を、Webアプリケーションの開発を通じて体験する。

学生は「GitHubを習う人」ではなく、**お客様の課題を解く側**として、
- お客様の悩みを理解し
- 解決策（自分で学び続けられる仕組み）を考え
- GitHub / Codespaces で実際に手を動かして作り
- お客様（講師）に提案する

という、コンサルタントの仕事の一周を体験します。
その体験そのものが、DXCが実際にお客様先で行っている **デジタル人材育成・内製化支援** の縮図になっています。

---

## 📁 リポジトリ構成

```
internship-program-Technology-consulting/
├── README.md                         ← このファイル（全体像）
├── docs/                             ← プログラム設計ドキュメント
│   ├── 01_プログラムの大義名分.md
│   ├── 02_カリキュラム_1.5日.md
│   ├── 03_お客様課題（お題）.md
│   ├── 04_ディスカッション設計.md
│   ├── 05_ペアプログラミング運営.md
│   ├── 06_静的サイトホスティング方針.md
│   └── 07_内製化支援の文脈と課題の渡し方.md
├── handson/                          ← 当日使うハンズオン教材
│   ├── index.html                    ← 学生が編集するテンプレート
│   ├── style.css
│   ├── README.md
│   └── Codespacesプレビュー手順書.md  ← 配布用（スクショ差し込み前提）
├── tests/                            ← UIテスト（発展・任意）
│   ├── portal.spec.js                ← Playwright テスト
│   └── Playwrightテスト手順書.md      ← 配布用
├── playwright.config.js
└── package.json
```

---

## 🚀 ハンズオンの始め方（学生向け）

1. このリポジトリを Codespaces で開く（`< > Code` → `Codespaces` → `Create codespace on main`）
2. `handson/Codespacesプレビュー手順書.md` の通りに進める
3. `index.html` を自分の内容に書きかえ、プレビューで表示する

### ▶ index.html を Codespaces で動かすコマンド

Codespaces のターミナルで、次の2行を実行します。

```bash
cd handson
python3 -m http.server 8000
```

→ `Serving HTTP on ... port 8000` と出たら、右下の **「Open in Browser」** か、
下部 **PORTS** タブの `8000` の🌐をクリックすると `index.html` が表示されます。

> 1コマンドで済ませたい場合（フォルダ移動なし）：
> ```bash
> python3 -m http.server 8000 --directory handson
> ```

### 🧪 UIテストを動かすコマンド（発展・任意）

```bash
npm install -D @playwright/test
npx playwright install --with-deps chromium
npx playwright test
```

詳しくは `tests/Playwrightテスト手順書.md` を参照。

---

## 📌 前提・制約メモ

- 参加者：大学2年生・IT初心者・初対面
- 期間：1日目 AM／PM ＋ 2日目 15:00 まで（実質1.5日）
- 環境：**学生個人のAWSアカウントは用意しない**前提
- 静的サイト公開：クラウド（Azure/AWS）は未確定 → **Codespacesプレビューで成立する設計**（詳細は `docs/06`）
