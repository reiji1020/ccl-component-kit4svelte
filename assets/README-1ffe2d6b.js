import{r as j}from"./index-c013ead5.js";import{u as a}from"./index-dc1d5b46.js";import"./_commonjsHelpers-725317a4.js";var h={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=j,m=Symbol.for("react.element"),f=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,u=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function p(r,e,l){var o,s={},i=null,c=null;l!==void 0&&(i=""+l),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(c=e.ref);for(o in e)v.call(e,o)&&!g.hasOwnProperty(o)&&(s[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps,e)s[o]===void 0&&(s[o]=e[o]);return{$$typeof:m,type:r,key:i,ref:c,props:s,_owner:u.current}}t.Fragment=f;t.jsx=p;t.jsxs=p;h.exports=t;var n=h.exports;function d(r){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",a:"a",hr:"hr"},a(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"ccl-component-kit4svelte",children:"ccl-component-kit4svelte"}),`
`,n.jsx(e.p,{children:`CANDY CHUPS Labのサイトで使うコンポーネントのキットです。
元々Reactコンポーネントで開発していたのをSvelteに移行しました。`}),`
`,n.jsx(e.p,{children:"このライブラリの開発を行うにはSvelteの動作導入が必要です。"}),`
`,n.jsx(e.h2,{id:"figma",children:"Figma"}),`
`,n.jsx(e.p,{children:"https://www.figma.com/files/project/71337935/CCL_Component?fuid=1036675751093311196>"}),`
`,n.jsx(e.h2,{id:"利用用途",children:"利用用途"}),`
`,n.jsx(e.p,{children:"CANDY CHUPS Lab.名義でWebサービスを開発したり、ハッカソンに参加する時に簡単に使用できるコンポーネントになります。"}),`
`,n.jsx(e.p,{children:"基本的にはCCLメンバー以外が使ってもうま味はないです。俺得ライブラリの予定です。"}),`
`,n.jsx(e.h2,{id:"利用方法",children:"利用方法"}),`
`,n.jsx(e.p,{children:"以下のコマンドでライブラリを導入して下さい。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-zsh",children:`> yarn add cclkit4svelte

or

> npm i cclkit4svelte
`})}),`
`,n.jsx(e.h2,{id:"本ライブラリの開発について",children:"本ライブラリの開発について"}),`
`,n.jsxs(e.p,{children:["コンポーネントライブラリの開発には、Node.jsのVersion20以降の環境が必要です。パッケージマネージャにはnpmを使用します。詳細なバージョンについては",n.jsx(e.code,{children:"package.json"}),"に記載をしていますのでご確認ください。"]}),`
`,n.jsxs(e.p,{children:["Node.jsのバージョン切り替えには",n.jsx(e.a,{href:"https://volta.sh/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Volta"}),"をおすすめします。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-zsh",children:`volta install node
# or
volta install node@20

node -v
#任意のNodeのバージョンが表示されればOK
v18.16.1
`})}),`
`,n.jsxs(e.p,{children:["また、本ライブラリの開発には",n.jsx(e.code,{children:"pnpm"}),"の導入が必要です。",n.jsx(e.code,{children:"npm"}),"や",n.jsx(e.code,{children:"yarn"}),"では開発準備ができないためご注意ください。voltaを使用している場合、pnpmもvoltaを使用して導入することができます。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-zsh",children:`volta install pnpm
`})}),`
`,n.jsxs(e.p,{children:["新規コンポーネントを開発する場合は、必ずStorybookで確認できるコンポーネント仕様書を一緒に作成してください。",n.jsx(e.code,{children:"stories"}),"は",n.jsx(e.code,{children:"src/stories"}),"ディレクトリの中に格納してください。"]}),`
`,n.jsxs(e.p,{children:["コンポーネントそのものは",n.jsx(e.code,{children:"lib"}),"ディレクトリの中に格納してください。"]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"ccl-component-kit",children:"ccl-component-kit"}),`
`,n.jsx(e.p,{children:`This is a kit of components for use at the CANDY CHUPS Lab site.
Originally developed with React components, we migrated to Svelte.`}),`
`,n.jsxs(e.p,{children:["Everything you need to build a Svelte project, powered by ",n.jsx(e.a,{href:"https://github.com/sveltejs/kit/tree/master/packages/create-svelte",target:"_blank",rel:"nofollow noopener noreferrer",children:n.jsx(e.code,{children:"create-svelte"})}),"."]}),`
`,n.jsx(e.h2,{id:"figma-1",children:"Figma"}),`
`,n.jsx(e.p,{children:"https://www.figma.com/files/project/71337935/CCL_Component?fuid=1036675751093311196>"}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.p,{children:"It will be a component that can be easily used when developing web services under the name of CANDY CHUPS Lab. or participating in hackathons."}),`
`,n.jsx(e.p,{children:"Basically, it is not intended to be used by non-CCL members. It is planned to be a private library."}),`
`,n.jsx(e.h2,{id:"how-to-use",children:"How to use"}),`
`,n.jsx(e.p,{children:"Please install the library with the following command."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-zsh",children:`> yarn add cclkit4svelte

or

> npm i cclkit4svelte
`})}),`
`,n.jsx(e.h2,{id:"about-the-development-of-this-library",children:"About the development of this library"}),`
`,n.jsxs(e.p,{children:["The development of component libraries requires a Node.js environment with Version 20 or higher. Use npm as the package manager. Please check the ",n.jsx(e.code,{children:"package.json"})," for detailed version information."]}),`
`,n.jsxs(e.p,{children:["We recommend ",n.jsx(e.a,{href:"https://volta.sh/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Volta"})," for switching Node.js versions."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-zsh",children:`volta install node
# or
volta install node@20

node -v
#Once the desired Node version is displayed, it is OK.
v18.16.1
`})}),`
`,n.jsxs(e.p,{children:["Also, you need to install ",n.jsx(e.code,{children:"pnpm"})," to develop this library. Note that ",n.jsx(e.code,{children:"npm"})," and ",n.jsx(e.code,{children:"yarn"})," do not prepare you for development; if you are using volta, pnpm can also be installed using volta."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-zsh",children:`volta install pnpm
`})}),`
`,n.jsxs(e.p,{children:["When developing a new component, always create a component specification together with it, which can be found in the Storybook. Store ",n.jsx(e.code,{children:"stories"})," in the ",n.jsx(e.code,{children:"src/stories"})," directory."]}),`
`,n.jsxs(e.p,{children:["The component itself should be stored in the ",n.jsx(e.code,{children:"lib"})," directory."]})]})}function k(r={}){const{wrapper:e}=Object.assign({},a(),r.components);return e?n.jsx(e,Object.assign({},r,{children:n.jsx(d,r)})):d(r)}export{k as default};
