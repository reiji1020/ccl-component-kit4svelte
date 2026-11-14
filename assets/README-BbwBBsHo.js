import{j as e,M as o}from"./index-B13mxnuk.js";import{useMDXComponents as l}from"./index-zCu6w-sW.js";import"./iframe-b3i3DMxK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ca4lBP7z.js";import"./index-Bhqu_tAV.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/README"}),`
`,e.jsx(n.h1,{id:"ccl-component-kit4svelte",children:"ccl-component-kit4svelte"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/reiji1020/ccl-component-kit4svelte/actions/workflows/storybook-release.yaml",rel:"nofollow",children:e.jsx(n.img,{src:"https://github.com/reiji1020/ccl-component-kit4svelte/actions/workflows/storybook-release.yaml/badge.svg?branch=main",alt:"Release Storybook to GitHubPages"})}),`
`,e.jsx(n.a,{href:"https://github.com/reiji1020/ccl-component-kit4svelte/actions/workflows/publish-package.yaml",rel:"nofollow",children:e.jsx(n.img,{src:"https://github.com/reiji1020/ccl-component-kit4svelte/actions/workflows/publish-package.yaml/badge.svg",alt:"Publish Package to npmjs"})})]}),`
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-zsh",children:`yarn add cclkit4svelte

npm i cclkit4svelte

pnpm i cclkit4svelte
`})}),`
`,e.jsx(n.h3,{id:"svelte-5-quickstart",children:"Svelte 5 quickstart"}),`
`,e.jsxs(n.p,{children:["Svelte 5の ",e.jsx(n.code,{children:"+page.svelte"})," などに貼り付けて使えます。公開エントリーポイントの ",e.jsx(n.code,{children:"cclkit4svelte"})," からコンポーネントを読み込むと、パレットとCSSカスタムプロパティも読み込まれます。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<script>
  import { Button, CCLVividColor } from 'cclkit4svelte';
<\/script>

<Button label="Hello" type="button" bgColor={CCLVividColor.SODA_BLUE} />
`})}),`
`,e.jsxs(n.p,{children:["CSS変数だけを使う場合や、アプリのエントリーポイントで先に読み込みたい場合は ",e.jsx(n.code,{children:"import 'cclkit4svelte/style.css';"})," を使えます。通常のコンポーネント利用では追加のCSS importは不要です。配色は ",e.jsx(n.code,{children:"bgColor"})," などのpropsに ",e.jsx(n.code,{children:"CCLVividColor"})," のトークンを渡して変更できます。"]}),`
`,e.jsx(n.h3,{id:"form-example",children:"Form example"}),`
`,e.jsxs(n.p,{children:["フォーム属性を追加した ",e.jsx(n.strong,{children:"4.0.3以降"}),"向けの例です。",e.jsx(n.code,{children:"bind:value"})," で入力値を同期し、",e.jsx(n.code,{children:"required"})," はブラウザーの必須入力検証に使われます。送信時は ",e.jsx(n.code,{children:"name"})," が ",e.jsx(n.code,{children:"FormData"})," のキーになります。この例はデータを画面に表示します。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<script>
  import { Button, CCLVividColor, Input, Select } from 'cclkit4svelte';

  let email = $state('');
  let plan = $state('');
  let result = $state('');

  const plans = [
    { value: '', label: 'Choose a plan' },
    { value: 'basic', label: 'Basic' }
  ];

  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    result = JSON.stringify(Object.fromEntries(data));
  }
<\/script>

<form onsubmit={submit}>
  <Input label="Email" type="email" name="email" autocomplete="email" required bind:value={email} />
  <Select label="Plan" name="plan" options={plans} required bind:value={plan} />
  <Button label="Send" type="submit" bgColor={CCLVividColor.SODA_BLUE} />
  <output aria-label="Submitted data">{result}</output>
</form>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Button"})," は ",e.jsx(n.code,{children:"type"})," を省略するとフォーム内で送信ボタンになります。フォームを送信しない操作には ",e.jsx(n.code,{children:'type="button"'})," を指定してください。"]}),`
`,e.jsx(n.h2,{id:"本ライブラリの開発について",children:"本ライブラリの開発について"}),`
`,e.jsxs(n.p,{children:["コンポーネントライブラリの開発には、Node.js 22.23.4以降の環境が必要です。パッケージマネージャにはpnpmを使用します。詳細なバージョンについては",e.jsx(n.code,{children:"package.json"}),"に記載をしていますのでご確認ください。"]}),`
`,e.jsxs(n.p,{children:["Node.jsのバージョン切り替えには",e.jsx(n.a,{href:"https://volta.sh/",rel:"nofollow",children:"Volta"}),"をおすすめします。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-zsh",children:`volta install node
# or
volta install node@22.23.4

node -v
#任意のNodeのバージョンが表示されればOK
v22.23.4
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-zsh",children:`yarn add cclkit4svelte

npm i cclkit4svelte

pnpm i cclkit4svelte
`})}),`
`,e.jsx(n.h3,{id:"svelte-5-usage",children:"Svelte 5 usage"}),`
`,e.jsxs(n.p,{children:["Copy the ",e.jsx(n.a,{href:"#svelte-5-quickstart",children:"quickstart"})," or ",e.jsx(n.a,{href:"#form-example",children:"form example"})," above into a Svelte 5 component, such as ",e.jsx(n.code,{children:"+page.svelte"}),". Import components and color tokens from ",e.jsx(n.code,{children:"cclkit4svelte"}),". The package entry point loads the palette and CSS custom properties automatically. To load the variables on their own or earlier in the app, use ",e.jsx(n.code,{children:"import 'cclkit4svelte/style.css';"}),". Pass a token such as ",e.jsx(n.code,{children:"CCLVividColor.SODA_BLUE"})," to ",e.jsx(n.code,{children:"bgColor"})," to customize the button."]}),`
`,e.jsxs(n.p,{children:["The form example uses the HTML attributes available in ",e.jsx(n.strong,{children:"4.0.3 and later"}),". It binds values with ",e.jsx(n.code,{children:"bind:value"}),", uses native ",e.jsx(n.code,{children:"required"})," validation, and displays the submitted ",e.jsx(n.code,{children:"FormData"})," entries keyed by ",e.jsx(n.code,{children:"name"}),". A ",e.jsx(n.code,{children:"Button"})," without a ",e.jsx(n.code,{children:"type"})," submits its enclosing form. Use ",e.jsx(n.code,{children:'type="button"'})," for actions that should leave the form open."]}),`
`,e.jsx(n.h2,{id:"about-the-development-of-this-library",children:"About the development of this library"}),`
`,e.jsxs(n.p,{children:["The development of component libraries requires Node.js 22.23.4 or later. Use pnpm as the package manager. Please check ",e.jsx(n.code,{children:"package.json"})," for detailed version information."]}),`
`,e.jsxs(n.p,{children:["We recommend ",e.jsx(n.a,{href:"https://volta.sh/",rel:"nofollow",children:"Volta"})," for switching Node.js versions."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-zsh",children:`volta install node
# or
volta install node@22.23.4

node -v
#Once the desired Node version is displayed, it is OK.
v22.23.4
`})}),`
`,e.jsxs(n.p,{children:["Also, you need to install ",e.jsx(n.code,{children:"pnpm"})," to develop this library. Note that ",e.jsx(n.code,{children:"npm"})," and ",e.jsx(n.code,{children:"yarn"})," do not prepare you for development; if you are using volta, pnpm can also be installed using volta."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-zsh",children:`volta install pnpm
`})}),`
`,e.jsxs(n.p,{children:["When developing a new component, always create a component specification together with it, which can be found in the Storybook. Store ",e.jsx(n.code,{children:"stories"})," in the ",e.jsx(n.code,{children:"src/stories"})," directory."]}),`
`,e.jsxs(n.p,{children:["The component itself should be stored in the ",e.jsx(n.code,{children:"lib"})," directory."]})]})}function p(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{p as default};
//# sourceMappingURL=README-BbwBBsHo.js.map
