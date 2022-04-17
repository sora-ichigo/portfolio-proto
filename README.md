# igsr5's Portfolio Protocol Buffers 🐃


[![auto release demo](https://github.com/igsr5/portfolio-proto/actions/workflows/create-release.yml/badge.svg)](https://github.com/igsr5/portfolio-proto/actions/workflows/create-release.yml)
[![gem release](https://github.com/igsr5/portfolio-proto/actions/workflows/gem-release.yml/badge.svg)](https://github.com/igsr5/portfolio-proto/actions/workflows/gem-release.yml)
[![npm release](https://github.com/igsr5/portfolio-proto/actions/workflows/npm-release.yml/badge.svg)](https://github.com/igsr5/portfolio-proto/actions/workflows/npm-release.yml)
[![Generate code from proto](https://github.com/igsr5/portfolio-proto/actions/workflows/gen-from-proto.yml/badge.svg)](https://github.com/igsr5/portfolio-proto/actions/workflows/gen-from-proto.yml)
[![Lint Code Base](https://github.com/igsr5/portfolio-proto/actions/workflows/linter.yml/badge.svg)](https://github.com/igsr5/portfolio-proto/actions/workflows/linter.yml)


@igsr5 のポートフォリオサイトに関するProtobufスキーマ。protoの定義と各言語実装のライブラリ配信を行う。

## Installation

### Ruby
https://rubygems.org/gems/igsr5-portfolio-proto
```sh
$ gem install igsr5-portfolio-proto
```

### Nodejs
https://www.npmjs.com/package/igsr5-portfolio-proto
```sh
$ npm i igsr5-portfolio-proto
```

### Golang
```sh
$ go get github.com/igsr5/portfolio-proto/go
```

## Design

```
.
├── proto # proto定義を配置する。新しいスキーマを追加したいときはこのディレクトリを更新してPRを出す
├── ruby # proto定義のRuby実装。自動生成コードで構成される
├── golang # proto定義のGolang実装。自動生成コードで構成される
└── nodejs # proto定義のNodejs実装。自動生成コードで構成される
```


## Development

新しいスキーマを定義したくなった際は `/proto` ディレクトリ配下にproto定義を実装する。
参考) https://github.com/igsr5/portfolio-proto/pull/6

1. `/proto`配下にスキーマを定義
2. PR を出す
3. proto定義に問題がなければ各言語実装が生成され、自動でPRを作成する(PRにURLがコメントされる)
4. レビューOKならPRをマージする
5. 各言語実装がmasterにマージされると自動GitHub Releaseが生成され gem, npmなどにもnew versionがリリースされる
6. リリース 🎉

## Contributing
https://github.com/igsr5/protosum
> GitHub Action x Protocol Buffers is an attempt to develop a miracle schema experience!
