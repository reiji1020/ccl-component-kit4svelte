import{af as e,ag as l}from"./index-3b10e989.js";import{u as s}from"./index-b43c2074.js";import"./iframe-1282655f.js";import"./_commonjsHelpers-725317a4.js";import"./index-1b441bc2.js";import"./index-75b40af3.js";import"./index-356e4a49.js";function i(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Docs/README"}),`
`,e.jsx(n.h1,{id:"ccl-component-kit4svelte",children:"ccl-component-kit4svelte"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/reiji1020/ccl-component-kit4svelte/actions/workflows/storybook-release.yaml",rel:"nofollow",children:e.jsx(n.img,{src:"https://github.com/reiji1020/ccl-component-kit4svelte/actions/workflows/storybook-release.yaml/badge.svg?branch=main",alt:"Release Storybook to GitHubPages"})}),`
`,e.jsx(n.a,{href:"https://github.com/reiji1020/ccl-component-kit4svelte/actions/workflows/publish-package.yaml",rel:"nofollow",children:e.jsx(n.img,{src:"https://github.com/reiji1020/ccl-component-kit4svelte/actions/workflows/publish-package.yaml/badge.svg?branch=main",alt:"Publish Package to npmjs"})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"library_card.png",alt:"library_card"})}),`
`,e.jsx(n.p,{children:`CANDY CHUPS Labのサイトで使うコンポーネントのキットです。
元々Reactコンポーネントで開発していたのをSvelteに移行しました。`}),`
`,e.jsx(n.p,{children:"このライブラリの開発を行うにはSvelteの導入が必要です。"}),`
`,e.jsx(n.h2,{id:"figma",children:"Figma"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.figma.com/file/RWLq3IaUeF0soEH666sXQC/Common-Component?type=design&node-id=0%3A1&mode=design&t=ESVNyUtQevAFIe3o-1",rel:"nofollow",children:"Figma"})}),`
`,e.jsx(n.h2,{id:"chromatic",children:"Chromatic"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.chromatic.com/builds?appId=660998abb5c9b86c546695d3",rel:"nofollow",children:"Chromatic"})}),`
`,e.jsxs(n.p,{children:["Chromaticによるビジュアルテストをローカルで実施したい場合は",e.jsx(n.a,{href:"https://github.com/reiji1020",rel:"nofollow",children:"reiji1020"}),"までご連絡ください。"]}),`
`,e.jsx(n.h2,{id:"利用用途",children:"利用用途"}),`
`,e.jsx(n.p,{children:"CANDY CHUPS Lab.名義でWebサービスを開発したり、ハッカソンに参加する時に簡単に使用できるコンポーネントになります。"}),`
`,e.jsx(n.p,{children:"基本的にはCCLメンバー以外が使ってもうま味はないです。俺得ライブラリの予定です。"}),`
`,e.jsx(n.h2,{id:"利用方法",children:"利用方法"}),`
`,e.jsx(n.p,{children:"以下のコマンドでライブラリを導入して下さい。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-zsh",children:`> yarn add cclkit4svelte

or

> npm i cclkit4svelte
`})}),`
`,e.jsx(n.h2,{id:"本ライブラリの開発について",children:"本ライブラリの開発について"}),`
`,e.jsxs(n.p,{children:["コンポーネントライブラリの開発には、Node.jsのVersion20以降の環境が必要です。パッケージマネージャにはnpmを使用します。詳細なバージョンについては",e.jsx(n.code,{children:"package.json"}),"に記載をしていますのでご確認ください。"]}),`
`,e.jsxs(n.p,{children:["Node.jsのバージョン切り替えには",e.jsx(n.a,{href:"https://volta.sh/",rel:"nofollow",children:"Volta"}),"をおすすめします。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-zsh",children:`volta install node
# or
volta install node@20

node -v
#任意のNodeのバージョンが表示されればOK
v18.16.1
`})}),`
`,e.jsxs(n.p,{children:["また、本ライブラリの開発には",e.jsx(n.code,{children:"pnpm"}),"の導入が必要です。",e.jsx(n.code,{children:"npm"}),"や",e.jsx(n.code,{children:"yarn"}),"では開発準備ができないためご注意ください。voltaを使用している場合、pnpmもvoltaを使用して導入することができます。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-zsh",children:`volta install pnpm
`})}),`
`,e.jsxs(n.p,{children:["新規コンポーネントを開発する場合は、必ずStorybookで確認できるコンポーネント仕様書を一緒に作成してください。",e.jsx(n.code,{children:"stories"}),"は",e.jsx(n.code,{children:"src/stories"}),"ディレクトリの中に格納してください。"]}),`
`,e.jsxs(n.p,{children:["コンポーネントそのものは",e.jsx(n.code,{children:"lib"}),"ディレクトリの中に格納してください。"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{id:"ccl-component-kit",children:"ccl-component-kit"}),`
`,e.jsx(n.p,{children:`This is a kit of components for use at the CANDY CHUPS Lab site.
Originally developed with React components, we migrated to Svelte.`}),`
`,e.jsxs(n.p,{children:["Everything you need to build a Svelte project, powered by ",e.jsx(n.a,{href:"https://github.com/sveltejs/kit/tree/master/packages/create-svelte",rel:"nofollow",children:e.jsx(n.code,{children:"create-svelte"})}),"."]}),`
`,e.jsx(n.h2,{id:"figma-1",children:"Figma"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.figma.com/file/RWLq3IaUeF0soEH666sXQC/Common-Component?type=design&node-id=0%3A1&mode=design&t=ESVNyUtQevAFIe3o-1",rel:"nofollow",children:"Figma"})}),`
`,e.jsx(n.h2,{id:"chromatic-1",children:"Chromatic"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.chromatic.com/builds?appId=660998abb5c9b86c546695d3",rel:"nofollow",children:"Chromatic"})}),`
`,e.jsxs(n.p,{children:["Please contact ",e.jsx(n.a,{href:"https://github.com/reiji1020",rel:"nofollow",children:"reiji1020"})," if you wish to carry out visual testing with Chromatic locally."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"It will be a component that can be easily used when developing web services under the name of CANDY CHUPS Lab. or participating in hackathons."}),`
`,e.jsx(n.p,{children:"Basically, it is not intended to be used by non-CCL members. It is planned to be a private library."}),`
`,e.jsx(n.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsx(n.p,{children:"Please install the library with the following command."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-zsh",children:`> yarn add cclkit4svelte

or

> npm i cclkit4svelte
`})}),`
`,e.jsx(n.h2,{id:"about-the-development-of-this-library",children:"About the development of this library"}),`
`,e.jsxs(n.p,{children:["The development of component libraries requires a Node.js environment with Version 20 or higher. Use npm as the package manager. Please check the ",e.jsx(n.code,{children:"package.json"})," for detailed version information."]}),`
`,e.jsxs(n.p,{children:["We recommend ",e.jsx(n.a,{href:"https://volta.sh/",rel:"nofollow",children:"Volta"})," for switching Node.js versions."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-zsh",children:`volta install node
# or
volta install node@20

node -v
#Once the desired Node version is displayed, it is OK.
v18.16.1
`})}),`
`,e.jsxs(n.p,{children:["Also, you need to install ",e.jsx(n.code,{children:"pnpm"})," to develop this library. Note that ",e.jsx(n.code,{children:"npm"})," and ",e.jsx(n.code,{children:"yarn"})," do not prepare you for development; if you are using volta, pnpm can also be installed using volta."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-zsh",children:`volta install pnpm
`})}),`
`,e.jsxs(n.p,{children:["When developing a new component, always create a component specification together with it, which can be found in the Storybook. Store ",e.jsx(n.code,{children:"stories"})," in the ",e.jsx(n.code,{children:"src/stories"})," directory."]}),`
`,e.jsxs(n.p,{children:["The component itself should be stored in the ",e.jsx(n.code,{children:"lib"})," directory."]})]})}function m(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{m as default};
//# sourceMappingURL=README-20db9ef8.js.map
