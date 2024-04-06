import{S as H,i as J,s as Q,e as b,t as X,c as g,a as B,b as Z,d as m,f as A,g as f,h as $,j as _,k as ee,n as y}from"./index-5bf62044.js";import{C as r}from"./config-088799f1.js";import{f as a}from"./index-6eef940f.js";import"./lifecycle-4aaf5bd1.js";function oe(t){let e,n,s;return{c(){e=b("button"),n=b("span"),s=X(t[1]),this.h()},l(u){e=g(u,"BUTTON",{class:!0,style:!0});var o=B(e);n=g(o,"SPAN",{class:!0});var E=B(n);s=Z(E,t[1]),E.forEach(m),o.forEach(m),this.h()},h(){A(n,"class","btLabel svelte-1jultc4"),A(e,"class","buttonWrapper svelte-1jultc4"),f(e,"--bgColor","var("+t[0]+")")},m(u,o){$(u,e,o),_(e,n),_(n,s)},p(u,[o]){o&2&&ee(s,u[1]),o&1&&f(e,"--bgColor","var("+u[0]+")")},i:y,o:y,d(u){u&&m(e)}}}function re(t,e,n){let{bgColor:s}=e,{label:u}=e;return t.$$set=o=>{"bgColor"in o&&n(0,s=o.bgColor),"label"in o&&n(1,u=o.label)},[s,u]}class z extends H{constructor(e){super(),J(this,e,re,oe,Q,{bgColor:0,label:1})}}z.__docgen={version:3,name:"Button.svelte",data:[{keywords:[{name:"default",description:"--strawberry-pink"},{name:"type",description:"string"}],visibility:"public",description:"ボタンカラー、CCLVividColorの中から選ぶ",name:"bgColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"default",description:"Button"},{name:"type",description:"string"}],visibility:"public",description:"ボタンの中に表示するテキスト",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const te={title:"Common/Button",component:z,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{onClick:{onClick:a()},bgColor:{control:{type:"select"},options:[r.STRAWBERRY_PINK,r.PINEAPPLE_YELLOW,r.SODA_BLUE,r.MELON_GREEN,r.GRAPE_PURPLE,r.WRAP_GREY]}}},l={args:{bgColor:r.STRAWBERRY_PINK,label:"Strawberry　Pink",onClick:a()}},i={args:{bgColor:r.PINEAPPLE_YELLOW,label:"Pineapple Yellow",onClick:a()}},c={args:{bgColor:r.SODA_BLUE,label:"Soda Blue",onClick:a()}},p={args:{bgColor:r.MELON_GREEN,label:"Melon Green",onClick:a()}},d={args:{bgColor:r.GRAPE_PURPLE,label:"Grape Purple",onClick:a()}},C={args:{bgColor:r.WRAP_GREY,label:"Wrap Grey",onClick:a()}};var P,k,L,F,R;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
    label: 'Strawberry　Pink',
    onClick: fn()
  }
}`,...(L=(k=l.parameters)==null?void 0:k.docs)==null?void 0:L.source},description:{story:`サービス、サークルのメインカラー

意思決定の場で、「次へ」や「OK」など、肯定の同意を得るときに使用します。

Services, main colours of the circle.

Used in decision-making situations to obtain agreement of affirmation, e.g. 'Next' or 'OK'.`,...(R=(F=l.parameters)==null?void 0:F.docs)==null?void 0:R.description}}};var v,h,D,S,G;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.PINEAPPLE_YELLOW,
    label: 'Pineapple Yellow',
    onClick: fn()
  }
}`,...(D=(h=i.parameters)==null?void 0:h.docs)==null?void 0:D.source},description:{story:`意思決定の場で、ヘルプやユーザーの補助を行う情報を提示するときに使用します。中立カラーです。

Used when presenting information to help or assist users in decision-making. Neutral colour.`,...(G=(S=i.parameters)==null?void 0:S.docs)==null?void 0:G.description}}};var N,w,O,Y,W;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.SODA_BLUE,
    label: 'Soda Blue',
    onClick: fn()
  }
}`,...(O=(w=c.parameters)==null?void 0:w.docs)==null?void 0:O.source},description:{story:`意思決定の場で、キャンセルや取りやめなどの否定的な意思決定を行うボタンで使用します。

Used in decision-making situations with buttons for negative decisions such as cancel or withdraw.`,...(W=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:W.description}}};var U,V,I;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.MELON_GREEN,
    label: 'Melon Green',
    onClick: fn()
  }
}`,...(I=(V=p.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var T,x,K;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.GRAPE_PURPLE,
    label: 'Grape Purple',
    onClick: fn()
  }
}`,...(K=(x=d.parameters)==null?void 0:x.docs)==null?void 0:K.source}}};var M,j,q;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.WRAP_GREY,
    label: 'Wrap Grey',
    onClick: fn()
  }
}`,...(q=(j=C.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const le=["Pink","Yellow","Blue","Green","Purple","Grey"];export{c as Blue,p as Green,C as Grey,l as Pink,d as Purple,i as Yellow,le as __namedExportsOrder,te as default};
