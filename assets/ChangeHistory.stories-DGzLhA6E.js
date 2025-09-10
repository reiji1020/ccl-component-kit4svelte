import{C as V}from"./ChangeHistory-DGbfRUDK.js";import{C as t}from"./config-kcBgQwvH.js";import"./props-CUu2VnSM.js";import"./runtime-gABUAsI6.js";import"./render-CxQItQXj.js";import"./if-B7kPsuPf.js";import"./each-Bi0pIGDH.js";import"./attributes-CYWh1Jxy.js";import"./style-DvJ3IcV1.js";import"./class-B-bVKzaY.js";import"./lifecycle-Cmteo-47.js";const X={title:"CommonComponents/ChangeHistory",component:V,tags:["autodocs"],argTypes:{historyItems:{control:"object",description:"表示する更新履歴の配列"},height:{control:"text",description:'コンポーネントの高さ。CSSの値を指定します (例: "400px")。'},defaultColor:{control:{type:"select"},options:Object.values(t),description:"アイテムに色が指定されていない場合のデフォルトカラー。`CCLVividColor`の値を指定します。"}}},n=[{date:"2025/07/20",title:"メジャーアップデートと新機能の追加",color:t.STRAWBERRY_PINK,tag:"機能追加",version:"v2.0.0",details:["ccl-component-kit4svelteをv2.0.0に更新しました。","新コンポーネント「Dashboard」を追加しました。","パフォーマンスを改善し、ページの読み込み速度が向上しました。"]},{date:"2025/07/01",title:"CROSSをリリースしました",tag:"活動記録",color:t.MELON_GREEN},{date:"2025/05/15",title:"技術書典18にサークル参加しました",tag:"イベント"},{date:"2025/04/10",title:"軽微なバグ修正",version:"v1.5.2"}],Y=[...n,{date:"2025/03/15",title:"UIコンポーネントのドキュメントを更新",tag:"ドキュメント",color:t.GRAPE_PURPLE},{date:"2025/02/01",title:"パフォーマンスチューニングを実施",version:"v1.5.1"},{date:"2025/01/20",title:"Selectコンポーネントの不具合を修正",tag:"バグ修正",color:t.PINEAPPLE_YELLOW,version:"v1.5.0"},{date:"2025/01/05",title:"Checkboxコンポーネントを追加",tag:"機能追加",color:t.STRAWBERRY_PINK}],e={name:"Default",args:{historyItems:n,defaultColor:t.SODA_BLUE}},o={name:"Custom Default Color",args:{historyItems:n,defaultColor:t.PINEAPPLE_YELLOW}},r={name:"Single Item",args:{historyItems:[n[0]]}},s={name:"Empty",args:{historyItems:[]}},a={name:"Minimal",args:{historyItems:[{date:"2025/01/01",title:"プロジェクトを開始しました。"},{date:"2024/12/25",title:"プレリリース版を公開しました。"}]}},i={name:"With Limited Height",args:{historyItems:Y,height:"400px",defaultColor:t.SODA_BLUE}};var m,c,l,d,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    historyItems: mockData,
    defaultColor: CCLVividColor.SODA_BLUE
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source},description:{story:"アイテムごとに異なる色を指定した場合の表示です。\n色が指定されていないアイテムには、`defaultColor`プロパティが適用されます。",...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.description}}};var u,g,C,h,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Custom Default Color',
  args: {
    historyItems: mockData,
    defaultColor: CCLVividColor.PINEAPPLE_YELLOW
  }
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source},description:{story:"`defaultColor`プロパティを上書きした場合の表示です。\n色が指定されていないアイテムに、指定したデフォルトカラー（この場合は黄色）が適用されます。",...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.description}}};var E,I,L,S,f;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Single Item',
  args: {
    historyItems: [mockData[0]]
  }
}`,...(L=(I=r.parameters)==null?void 0:I.docs)==null?void 0:L.source},description:{story:"更新履歴が1件だけの場合の表示です。",...(f=(S=r.parameters)==null?void 0:S.docs)==null?void 0:f.description}}};var D,v,P,_,O;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Empty',
  args: {
    historyItems: []
  }
}`,...(P=(v=s.parameters)==null?void 0:v.docs)==null?void 0:P.source},description:{story:"`historyItems` 配列が空の場合の表示です。",...(O=(_=s.parameters)==null?void 0:_.docs)==null?void 0:O.description}}};var A,R,W,k,x;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Minimal',
  args: {
    historyItems: [{
      date: '2025/01/01',
      title: 'プロジェクトを開始しました。'
    }, {
      date: '2024/12/25',
      title: 'プレリリース版を公開しました。'
    }]
  }
}`,...(W=(R=a.parameters)==null?void 0:R.docs)==null?void 0:W.source},description:{story:"タグやバージョン、詳細リストがない、最小限のデータでの表示です。",...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.description}}};var M,N,B,H,U;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'With Limited Height',
  args: {
    historyItems: longMockData,
    height: '400px',
    defaultColor: CCLVividColor.SODA_BLUE
  }
}`,...(B=(N=i.parameters)==null?void 0:N.docs)==null?void 0:B.source},description:{story:"高さを指定してコンポーネントをスクロール可能にする場合の表示です。",...(U=(H=i.parameters)==null?void 0:H.docs)==null?void 0:U.description}}};const Z=["Default","CustomDefaultColor","SingleItem","Empty","Minimal","WithLimitedHeight"];export{o as CustomDefaultColor,e as Default,s as Empty,a as Minimal,r as SingleItem,i as WithLimitedHeight,Z as __namedExportsOrder,X as default};
//# sourceMappingURL=ChangeHistory.stories-DGzLhA6E.js.map
