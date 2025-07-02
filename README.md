# ccl-component-kit4svelte

[![Release Storybook to GitHubPages](https://github.com/reiji1020/ccl-component-kit4svelte/actions/workflows/storybook-release.yaml/badge.svg?branch=main)](https://github.com/reiji1020/ccl-component-kit4svelte/actions/workflows/storybook-release.yaml)
[![Publish Package to npmjs](https://github.com/reiji1020/ccl-component-kit4svelte/actions/workflows/publish-package.yaml/badge.svg?branch=main)](https://github.com/reiji1020/ccl-component-kit4svelte/actions/workflows/publish-package.yaml)

![library_card](static/library_card.png)

CANDY CHUPS Labのサイトで使うコンポーネントのキットです。
元々Reactコンポーネントで開発していたのをSvelteに移行しました。

このライブラリの開発を行うにはSvelteの導入が必要です。

## Figma

[Figma](https://www.figma.com/file/RWLq3IaUeF0soEH666sXQC/Common-Component?type=design&node-id=0%3A1&mode=design&t=ESVNyUtQevAFIe3o-1)

## Chromatic

[Chromatic](https://www.chromatic.com/builds?appId=660998abb5c9b86c546695d3)

Chromaticによるビジュアルテストをローカルで実施したい場合は[reiji1020](https://github.com/reiji1020)までご連絡ください。

## 利用用途

CANDY CHUPS Lab.名義でWebサービスを開発したり、ハッカソンに参加する時に簡単に使用できるコンポーネントになります。

基本的にはCCLメンバー以外が使ってもうま味はないです。俺得ライブラリの予定です。

## 利用方法

利用しているパッケージマネージャーのコマンドでライブラリを導入して下さい。

```zsh
yarn add cclkit4svelte

npm i cclkit4svelte

pnpm install cclkit4svelte
```

## 本ライブラリの開発について

コンポーネントライブラリの開発には、Node.jsのVersion20以降の環境が必要です。パッケージマネージャにはnpmを使用します。詳細なバージョンについては`package.json`に記載をしていますのでご確認ください。

Node.jsのバージョン切り替えには[Volta](https://volta.sh/)をおすすめします。

```zsh
volta install node
# or
volta install node@20

node -v
#任意のNodeのバージョンが表示されればOK
v20.11.1
```

また、本ライブラリの開発には`pnpm`の導入が必要です。`npm`や`yarn`では開発準備ができないためご注意ください。voltaを使用している場合、pnpmもvoltaを使用して導入することができます。

```zsh
volta install pnpm
```

新規コンポーネントを開発する場合は、必ずStorybookで確認できるコンポーネント仕様書を一緒に作成してください。`stories`は`src/stories`ディレクトリの中に格納してください。

コンポーネントそのものは`lib`ディレクトリの中に格納してください。

---

# ccl-component-kit

This is a kit of components for use at the CANDY CHUPS Lab site.
Originally developed with React components, we migrated to Svelte.

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Figma

[Figma](https://www.figma.com/file/RWLq3IaUeF0soEH666sXQC/Common-Component?type=design&node-id=0%3A1&mode=design&t=ESVNyUtQevAFIe3o-1)

## Chromatic

[Chromatic](https://www.chromatic.com/builds?appId=660998abb5c9b86c546695d3)

Please contact [reiji1020](https://github.com/reiji1020) if you wish to carry out visual testing with Chromatic locally.

## Usage

It will be a component that can be easily used when developing web services under the name of CANDY CHUPS Lab. or participating in hackathons.

Basically, it is not intended to be used by non-CCL members. It is planned to be a private library.

## How to use

Please install the library with the following command.

```zsh
yarn add cclkit4svelte

npm i cclkit4svelte

pnpm install cclkit4svelte
```

## About the development of this library

The development of component libraries requires a Node.js environment with Version 20 or higher. Use npm as the package manager. Please check the `package.json` for detailed version information.

We recommend [Volta](https://volta.sh/) for switching Node.js versions.

```zsh
volta install node
# or
volta install node@20

node -v
#Once the desired Node version is displayed, it is OK.
v20.11.1
```

Also, you need to install `pnpm` to develop this library. Note that `npm` and `yarn` do not prepare you for development; if you are using volta, pnpm can also be installed using volta.

```zsh
volta install pnpm
```

When developing a new component, always create a component specification together with it, which can be found in the Storybook. Store `stories` in the `src/stories` directory.

The component itself should be stored in the `lib` directory.
