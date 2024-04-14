import{S as X,i as Z,s as $,e as m,t as ee,c as A,a as v,b as ae,d as B,f as w,g as P,h as ne,j as F,k as te,n as R}from"./index-5bf62044.js";import{C as t}from"./config-38d8c761.js";import{f as l,e as o,w as i,u as c}from"./index-000460d8.js";import"./lifecycle-4aaf5bd1.js";function ue(a){let e,n,r;return{c(){e=m("button"),n=m("span"),r=ee(a[1]),this.h()},l(s){e=A(s,"BUTTON",{class:!0,style:!0});var u=v(e);n=A(u,"SPAN",{class:!0});var y=v(n);r=ae(y,a[1]),y.forEach(B),u.forEach(B),this.h()},h(){w(n,"class","btLabel svelte-1jultc4"),w(e,"class","buttonWrapper svelte-1jultc4"),P(e,"--bgColor","var("+a[0]+")")},m(s,u){ne(s,e,u),F(e,n),F(n,r)},p(s,[u]){u&2&&te(r,s[1]),u&1&&P(e,"--bgColor","var("+s[0]+")")},i:R,o:R,d(s){s&&B(e)}}}function oe(a,e,n){let{bgColor:r}=e,{label:s}=e;return a.$$set=u=>{"bgColor"in u&&n(0,r=u.bgColor),"label"in u&&n(1,s=u.label)},[r,s]}class Q extends X{constructor(e){super(),Z(this,e,oe,ue,$,{bgColor:0,label:1})}}Q.__docgen={version:3,name:"Button.svelte",data:[{keywords:[{name:"default",description:"--strawberry-pink"},{name:"type",description:"string"}],visibility:"public",description:"ボタンカラー、CCLVividColorの中から選ぶ",name:"bgColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"default",description:"Button"},{name:"type",description:"string"}],visibility:"public",description:"ボタンの中に表示するテキスト",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ce={title:"Common/Button",component:Q,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{onClick:l(),bgColor:{control:{type:"select"},options:[t.STRAWBERRY_PINK,t.PINEAPPLE_YELLOW,t.SODA_BLUE,t.MELON_GREEN,t.GRAPE_PURPLE,t.WRAP_GREY]}}},C={args:{bgColor:t.STRAWBERRY_PINK,label:"Strawberry Pink",onClick:l()},play:async({args:a,canvasElement:e})=>{await o(a.bgColor).toBe(t.STRAWBERRY_PINK),await o(a.label).toBe("Strawberry Pink");const n=i(e);await c.click(n.getByRole("button"))}},p={args:{bgColor:t.PINEAPPLE_YELLOW,label:"Pineapple Yellow",onClick:l()},play:async({args:a,canvasElement:e})=>{await o(a.bgColor).toBe(t.PINEAPPLE_YELLOW),await o(a.label).toBe("Pineapple Yellow");const n=i(e);await c.click(n.getByRole("button"))}},E={args:{bgColor:t.SODA_BLUE,label:"Soda Blue",onClick:l()},play:async({args:a,canvasElement:e})=>{await o(a.bgColor).toBe(t.SODA_BLUE),await o(a.label).toBe("Soda Blue");const n=i(e);await c.click(n.getByRole("button"))}},b={args:{bgColor:t.MELON_GREEN,label:"Melon Green",onClick:l()},play:async({args:a,canvasElement:e})=>{await o(a.bgColor).toBe(t.MELON_GREEN),await o(a.label).toBe("Melon Green");const n=i(e);await c.click(n.getByRole("button"))}},g={args:{bgColor:t.GRAPE_PURPLE,label:"Grape Purple",onClick:l()},play:async({args:a,canvasElement:e})=>{await o(a.bgColor).toBe(t.GRAPE_PURPLE),await o(a.label).toBe("Grape Purple");const n=i(e);await c.click(n.getByRole("button"))}},d={args:{bgColor:t.WRAP_GREY,label:"Wrap Grey",onClick:l()},play:async({args:a,canvasElement:e})=>{await o(a.bgColor).toBe(t.WRAP_GREY),await o(a.label).toBe("Wrap Grey");const n=i(e);await c.click(n.getByRole("button"))}};var _,L,k,f,D;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
    label: 'Strawberry Pink',
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    await expect(args.bgColor).toBe(CCLVividColor.STRAWBERRY_PINK);
    await expect(args.label).toBe('Strawberry Pink');
    // Buttonがクリックされた時のイベントを取得
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  }
}`,...(k=(L=C.parameters)==null?void 0:L.docs)==null?void 0:k.source},description:{story:`サービス、サークルのメインカラー

意思決定の場で、「次へ」や「OK」など、肯定の同意を得るときに使用します。

Services, main colours of the circle.

Used in decision-making situations to obtain agreement of affirmation, e.g. 'Next' or 'OK'.`,...(D=(f=C.parameters)==null?void 0:f.docs)==null?void 0:D.description}}};var G,S,h,N,Y;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.PINEAPPLE_YELLOW,
    label: 'Pineapple Yellow',
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    await expect(args.bgColor).toBe(CCLVividColor.PINEAPPLE_YELLOW);
    await expect(args.label).toBe('Pineapple Yellow');
    // Buttonがクリックされた時のイベントを取得
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  }
}`,...(h=(S=p.parameters)==null?void 0:S.docs)==null?void 0:h.source},description:{story:`意思決定の場で、ヘルプやユーザーの補助を行う情報を提示するときに使用します。中立カラーです。

Used when presenting information to help or assist users in decision-making. Neutral colour.`,...(Y=(N=p.parameters)==null?void 0:N.docs)==null?void 0:Y.description}}};var W,O,x,U,V;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.SODA_BLUE,
    label: 'Soda Blue',
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    await expect(args.bgColor).toBe(CCLVividColor.SODA_BLUE);
    await expect(args.label).toBe('Soda Blue');
    // Buttonがクリックされた時のイベントを取得
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  }
}`,...(x=(O=E.parameters)==null?void 0:O.docs)==null?void 0:x.source},description:{story:`意思決定の場で、キャンセルや取りやめなどの否定的な意思決定を行うボタンで使用します。

Used in decision-making situations with buttons for negative decisions such as cancel or withdraw.`,...(V=(U=E.parameters)==null?void 0:U.docs)==null?void 0:V.description}}};var I,M,T;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.MELON_GREEN,
    label: 'Melon Green',
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    await expect(args.bgColor).toBe(CCLVividColor.MELON_GREEN);
    await expect(args.label).toBe('Melon Green');
    // Buttonがクリックされた時のイベントを取得
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  }
}`,...(T=(M=b.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var K,j,q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.GRAPE_PURPLE,
    label: 'Grape Purple',
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    await expect(args.bgColor).toBe(CCLVividColor.GRAPE_PURPLE);
    await expect(args.label).toBe('Grape Purple');
    // Buttonがクリックされた時のイベントを取得
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  }
}`,...(q=(j=g.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,H,J;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.WRAP_GREY,
    label: 'Wrap Grey',
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    await expect(args.bgColor).toBe(CCLVividColor.WRAP_GREY);
    await expect(args.label).toBe('Wrap Grey');
    // Buttonがクリックされた時のイベントを取得
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  }
}`,...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const Ce=["Pink","Yellow","Blue","Green","Purple","Grey"];export{E as Blue,b as Green,d as Grey,C as Pink,g as Purple,p as Yellow,Ce as __namedExportsOrder,ce as default};
