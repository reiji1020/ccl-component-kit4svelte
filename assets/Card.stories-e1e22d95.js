import{C as W}from"./Card-3891a0bf.js";import{C as a}from"./config-e4d7b61a.js";import{w as p,e}from"./index-ea2a2f54.js";import"./index-edc2d624.js";import"./lifecycle-4aaf5bd1.js";const D={title:"CommonComponents/Card",component:W,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{borderColor:{control:{type:"select"},options:[a.STRAWBERRY_PINK,a.PINEAPPLE_YELLOW,a.SODA_BLUE,a.MELON_GREEN,a.GRAPE_PURPLE,a.WRAP_GREY]},altText:{control:{type:"text"}},title:{control:{type:"text"}},cardText:{control:{type:"text"}},src:{control:{type:"text"}}}},n={args:{borderColor:a.STRAWBERRY_PINK,src:"thumbnail.png",altText:"Strawberry Pink",title:"プライマリカラーのカードです",cardText:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"},play:async({args:t,canvasElement:r})=>{const o=p(r);await e(o.getByRole("img")).toHaveAttribute("alt","Strawberry Pink"),await e(t.borderColor).toBe(a.STRAWBERRY_PINK),await e(t.title).toBe("プライマリカラーのカードです"),await e(t.cardText).toBe("テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト")}},i={args:{borderColor:a.PINEAPPLE_YELLOW,src:"thumbnail.png",altText:"Pineapple Yellow",title:"セカンダリカラーのカードです",cardText:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"},play:async({args:t,canvasElement:r})=>{const o=p(r);await e(o.getByRole("img")).toHaveAttribute("alt","Pineapple Yellow"),await e(t.borderColor).toBe(a.PINEAPPLE_YELLOW),await e(t.title).toBe("セカンダリカラーのカードです"),await e(t.cardText).toBe("テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト")}},s={args:{borderColor:a.SODA_BLUE,src:"thumbnail.png",altText:"Soda Blue",title:"汎用的なお知らせ用のカードです",cardText:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"},play:async({args:t,canvasElement:r})=>{const o=p(r);await e(o.getByRole("img")).toHaveAttribute("alt","Soda Blue"),await e(t.borderColor).toBe(a.SODA_BLUE),await e(t.title).toBe("汎用的なお知らせ用のカードです"),await e(t.cardText).toBe("テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト")}},c={args:{borderColor:a.MELON_GREEN,src:"thumbnail.png",altText:"Melon Green",title:"書籍出版お知らせ用のカードです",cardText:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"},play:async({args:t,canvasElement:r})=>{const o=p(r);await e(o.getByRole("img")).toHaveAttribute("alt","Melon Green"),await e(t.borderColor).toBe(a.MELON_GREEN),await e(t.title).toBe("書籍出版お知らせ用のカードです"),await e(t.cardText).toBe("テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト")}},l={args:{borderColor:a.GRAPE_PURPLE,src:"thumbnail.png",altText:"Grape Purple",title:"コーディング成果物お知らせ用のカードです",cardText:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"},play:async({args:t,canvasElement:r})=>{const o=p(r);await e(o.getByRole("img")).toHaveAttribute("alt","Grape Purple"),await e(t.borderColor).toBe(a.GRAPE_PURPLE),await e(t.title).toBe("コーディング成果物お知らせ用のカードです"),await e(t.cardText).toBe("テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト")}};var d,m,g,C,E;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.STRAWBERRY_PINK,
    src: 'thumbnail.png',
    altText: 'Strawberry Pink',
    title: 'プライマリカラーのカードです',
    cardText: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'Strawberry Pink');
    await expect(args.borderColor).toBe(CCLVividColor.STRAWBERRY_PINK);
    await expect(args.title).toBe('プライマリカラーのカードです');
    await expect(args.cardText).toBe('テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト');
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source},description:{story:`イベント出展などのお知らせはプライマリカラーを使用します。

Primary colour for notices of event exhibits, etc.`,...(E=(C=n.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};var x,u,w,B,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.PINEAPPLE_YELLOW,
    src: 'thumbnail.png',
    altText: 'Pineapple Yellow',
    title: 'セカンダリカラーのカードです',
    cardText: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'Pineapple Yellow');
    await expect(args.borderColor).toBe(CCLVividColor.PINEAPPLE_YELLOW);
    await expect(args.title).toBe('セカンダリカラーのカードです');
    await expect(args.cardText).toBe('テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト');
  }
}`,...(w=(u=i.parameters)==null?void 0:u.docs)==null?void 0:w.source},description:{story:`オフライン活動に関してはセカンダリカラーを使用します。

For offline activities such as book publishing, a secondary colour is used.`,...(b=(B=i.parameters)==null?void 0:B.docs)==null?void 0:b.description}}};var v,P,y,R,L;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.SODA_BLUE,
    src: 'thumbnail.png',
    altText: 'Soda Blue',
    title: '汎用的なお知らせ用のカードです',
    cardText: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'Soda Blue');
    await expect(args.borderColor).toBe(CCLVividColor.SODA_BLUE);
    await expect(args.title).toBe('汎用的なお知らせ用のカードです');
    await expect(args.cardText).toBe('テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト');
  }
}`,...(y=(P=s.parameters)==null?void 0:P.docs)==null?void 0:y.source},description:{story:`汎用的なお知らせとしてサードカラーを使用します。

Use third colour for other generic notices.`,...(L=(R=s.parameters)==null?void 0:R.docs)==null?void 0:L.description}}};var T,A,_,S,h;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.MELON_GREEN,
    src: 'thumbnail.png',
    altText: 'Melon Green',
    title: '書籍出版お知らせ用のカードです',
    cardText: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'Melon Green');
    await expect(args.borderColor).toBe(CCLVividColor.MELON_GREEN);
    await expect(args.title).toBe('書籍出版お知らせ用のカードです');
    await expect(args.cardText).toBe('テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト');
  }
}`,...(_=(A=c.parameters)==null?void 0:A.docs)==null?void 0:_.source},description:{story:`商業誌など書籍の出版に関しては特別にグリーンを使用します。

Special green is used for commercial magazines and other book publications.`,...(h=(S=c.parameters)==null?void 0:S.docs)==null?void 0:h.description}}};var N,G,O,Y,f;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.GRAPE_PURPLE,
    src: 'thumbnail.png',
    altText: 'Grape Purple',
    title: 'コーディング成果物お知らせ用のカードです',
    cardText: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'Grape Purple');
    await expect(args.borderColor).toBe(CCLVividColor.GRAPE_PURPLE);
    await expect(args.title).toBe('コーディング成果物お知らせ用のカードです');
    await expect(args.cardText).toBe('テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト');
  }
}`,...(O=(G=l.parameters)==null?void 0:G.docs)==null?void 0:O.source},description:{story:`コーディングの成果物のお知らせに関しては特別にパープルを使用します。

Special purple is used with regard to notices of coding deliverables.`,...(f=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:f.description}}};const k=["Default","SecondColor","ThirdColor","Writing","Coding"];export{l as Coding,n as Default,i as SecondColor,s as ThirdColor,c as Writing,k as __namedExportsOrder,D as default};
//# sourceMappingURL=Card.stories-e1e22d95.js.map
