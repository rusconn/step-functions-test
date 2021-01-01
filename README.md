# step-functions-test

## 概要

step functions を使ってみる。

## 所感

- フローが視覚化されるのでわかりやすい
  - 全体の構成を一覧出来る
  - 実際の実行パスがわかる
    - 各ステートの入力・出力がわかる
- ログがまとまるので確認しやすい
- 関数を部品化し易そう
  - 入出力の加工を ASL で行える
    - 関数のつなぎ込みが多少柔軟になる
  - リトライ設定を ASL で記述できる
    - リトライ回数やバックオフ設定等を柔軟に設定できる
  - エラー処理設定を ASL で記述できる
    - 関数ではエラー投げっぱなしで OK 感
    - Catch を型安全に書けないのが辛い

## メモ

- 入力が全部ログされるので、秘匿情報は入力すべきでない
  - https://stackoverflow.com/questions/46329742/how-to-pass-sensitive-information-securely-in-aws-step-functions
- serverless-framework でのローカル実行難しそう
  - プラグインがいくつか存在するが、機能不足
  - step functions local + JSON で出来そう
    - JSON どうやって用意する？
- cdk でのローカル実行は出来るらしい
  - https://stackoverflow.com/questions/63348917/is-there-a-way-of-running-aws-step-functions-locally-when-defined-by-cdk

## 罠

- Webpack にコードを minimize させるとエラー名も minimize されるので、Catch できなくなる
