# TDD in React

## Introduction

このページの写経

[ReactでTDD（テスト駆動開発）を始めよう : 環境構築からテスト作成、機能実装までの詳解ガイド](http://postd.cc/getting-started-with-tdd-in-react/)

## 準備

### nodeが入っていればok

```
$ node -v
v6.2.0
```

### テスト実行

```
$ npm install -g quik
$ npm install -g mocha
$ npm install
```

`-g` をつけると、Globalなinstallになり、当該パッケージのコマンドが何処からでも利用できるようになる。

```
$ quik
Quik is serving files at http://localhost:3030
  <-- GET /
webpack built c1ea80f4159549870fd5 in 12122ms
  --> GET / 200 9,395ms 511b
  <-- GET /index.js
  --> GET /index.js 200 4,921ms 1.9mb
  <-- GET /__webpack_hmr
```
