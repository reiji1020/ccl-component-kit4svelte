import{r as m}from"./index-c013ead5.js";import{u as a}from"./index-2d8ea55a.js";import"./_commonjsHelpers-725317a4.js";var h={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=m,x=Symbol.for("react.element"),f=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,u=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function p(o,e,l){var i,r={},t=null,c=null;l!==void 0&&(t=""+l),e.key!==void 0&&(t=""+e.key),e.ref!==void 0&&(c=e.ref);for(i in e)v.call(e,i)&&!g.hasOwnProperty(i)&&(r[i]=e[i]);if(o&&o.defaultProps)for(i in e=o.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:x,type:o,key:t,ref:c,props:r,_owner:u.current}}s.Fragment=f;s.jsx=p;s.jsxs=p;h.exports=s;var n=h.exports;function d(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...a(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"ccl-component-kit4svelte",children:"ccl-component-kit4svelte"}),`
`,n.jsx(e.p,{children:`CANDY CHUPS Labのサイトで使うコンポーネントのキットです。
元々Reactコンポーネントで開発していたのをSvelteに移行しました。`}),`
`,n.jsx(e.p,{children:"このライブラリの開発を行うにはSvelteの導入が必要です。"}),`
`,n.jsx(e.h2,{id:"figma",children:"Figma"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://www.figma.com/file/RWLq3IaUeF0soEH666sXQC/Common-Component?type=design&node-id=0%3A1&mode=design&t=ESVNyUtQevAFIe3o-1",rel:"nofollow",children:"Figma"})}),`
`,n.jsx(e.h2,{id:"chromatic",children:"Chromatic"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://www.chromatic.com/builds?appId=660998abb5c9b86c546695d3",rel:"nofollow",children:"Chromatic"})}),`
`,n.jsxs(e.p,{children:["Chromaticによるビジュアルテストをローカルで実施したい場合は",n.jsx(e.a,{href:"https://github.com/reiji1020",rel:"nofollow",children:"reiji1020"}),"までご連絡ください。"]}),`
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
`,n.jsxs(e.p,{children:["Node.jsのバージョン切り替えには",n.jsx(e.a,{href:"https://volta.sh/",rel:"nofollow",children:"Volta"}),"をおすすめします。"]}),`
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
`,n.jsxs(e.p,{children:["Everything you need to build a Svelte project, powered by ",n.jsx(e.a,{href:"https://github.com/sveltejs/kit/tree/master/packages/create-svelte",rel:"nofollow",children:n.jsx(e.code,{children:"create-svelte"})}),"."]}),`
`,n.jsx(e.h2,{id:"figma-1",children:"Figma"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://www.figma.com/file/RWLq3IaUeF0soEH666sXQC/Common-Component?type=design&node-id=0%3A1&mode=design&t=ESVNyUtQevAFIe3o-1",rel:"nofollow",children:"Figma"})}),`
`,n.jsx(e.h2,{id:"chromatic-1",children:"Chromatic"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://www.chromatic.com/builds?appId=660998abb5c9b86c546695d3",rel:"nofollow",children:"Chromatic"})}),`
`,n.jsxs(e.p,{children:["Please contact ",n.jsx(e.a,{href:"https://github.com/reiji1020",rel:"nofollow",children:"reiji1020"})," if you wish to carry out visual testing with Chromatic locally."]}),`
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
`,n.jsxs(e.p,{children:["We recommend ",n.jsx(e.a,{href:"https://volta.sh/",rel:"nofollow",children:"Volta"})," for switching Node.js versions."]}),`
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
`,n.jsxs(e.p,{children:["The component itself should be stored in the ",n.jsx(e.code,{children:"lib"})," directory."]})]})}function C(o={}){const{wrapper:e}={...a(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(d,{...o})}):d(o)}export{C as default};
//# sourceMappingURL=README-7a50fca6.js.map