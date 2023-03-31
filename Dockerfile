# ベースイメージ
FROM node:16-alpine

# 作業ディレクトリ
WORKDIR /app

# 依存関係のコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# ソースコードのコピー
COPY . .

# ビルド
RUN npm run build

# ポートの指定
EXPOSE 3000

# コマンド
CMD ["npm", "start"]