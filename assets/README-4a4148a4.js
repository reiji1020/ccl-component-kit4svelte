import{r as m}from"./index-c013ead5.js";import{u as d}from"./index-dc1d5b46.js";import"./_commonjsHelpers-725317a4.js";var p={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=m,x=Symbol.for("react.element"),f=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,v=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function h(t,e,c){var r,o={},s=null,l=null;c!==void 0&&(s=""+c),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)u.call(e,r)&&!g.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:x,type:t,key:s,ref:l,props:o,_owner:v.current}}i.Fragment=f;i.jsx=h;i.jsxs=h;p.exports=i;var n=p.exports;function a(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",hr:"hr",a:"a"},d(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"ccl-component-kit4svelte",children:"ccl-component-kit4svelte"}),`
`,n.jsx(e.p,{children:`CANDY CHUPS Labのサイトで使うコンポーネントのキットです。
元々Reactコンポーネントで開発していたのをSvelteに移行しました。`}),`
`,n.jsx(e.p,{children:"このライブラリの開発を行うにはSvelteの動作導入が必要です。"}),`
`,n.jsx(e.h2,{id:"figma",children:"Figma"}),`
`,n.jsx(e.p,{children:"https://www.figma.com/files/project/71337935/CCL_Component?fuid=1036675751093311196"}),`
`,n.jsx(e.h2,{id:"利用用途",children:"利用用途"}),`
`,n.jsx(e.p,{children:"CANDY CHUPS Lab.名義でWebサービスを開発したり、ハッカソンに参加する時に簡単に使用できるコンポーネントになります。"}),`
`,n.jsx(e.p,{children:"基本的にはCCLメンバー以外が使ってもうま味はないです。俺得ライブラリの予定です。"}),`
`,n.jsx(e.h2,{id:"利用方法",children:"利用方法"}),`
`,n.jsx(e.p,{children:"以下のコマンドでライブラリを導入して下さい。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-zsh",children:`> yarn add ccl-component-kit4svelte

or 

> npm i ccl-component-kit4svelte
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"ccl-component-kit",children:"ccl-component-kit"}),`
`,n.jsx(e.p,{children:`This is a kit of components for use at the CANDY CHUPS Lab site.
Originally developed with React components, we migrated to Svelte.`}),`
`,n.jsxs(e.p,{children:["Everything you need to build a Svelte project, powered by ",n.jsx(e.a,{href:"https://github.com/sveltejs/kit/tree/master/packages/create-svelte",target:"_blank",rel:"nofollow noopener noreferrer",children:n.jsx(e.code,{children:"create-svelte"})}),"."]}),`
`,n.jsx(e.h2,{id:"figma-1",children:"Figma"}),`
`,n.jsx(e.p,{children:"https://www.figma.com/files/project/71337935/CCL_Component?fuid=1036675751093311196"}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.p,{children:"It will be a component that can be easily used when developing web services under the name of CANDY CHUPS Lab. or participating in hackathons."}),`
`,n.jsx(e.p,{children:"Basically, it is not intended to be used by non-CCL members. It is planned to be a private library."}),`
`,n.jsx(e.h2,{id:"how-to-use",children:"How to use"}),`
`,n.jsx(e.p,{children:"Please install the library with the following command."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-zsh",children:`> yarn add ccl-component-kit4svelte

or 

> npm i ccl-component-kit4svelte
`})})]})}function _(t={}){const{wrapper:e}=Object.assign({},d(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(a,t)})):a(t)}export{_ as default};
