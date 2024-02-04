import{S as M,i as D,s as K,e as g,t as j,c as C,a as y,b as q,d as m,f as _,g as P,h as z,j as f,k as F,n as v}from"./index-b6956b47.js";import{C as n}from"./config-d1dd158c.js";import{a as H}from"./chunk-WFFRPTHA-a68c42c5.js";import"./lifecycle-4aaf5bd1.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";function J(t){let e,o,s;return{c(){e=g("button"),o=g("span"),s=j(t[1]),this.h()},l(a){e=C(a,"BUTTON",{class:!0,style:!0});var r=y(e);o=C(r,"SPAN",{class:!0});var b=y(o);s=q(b,t[1]),b.forEach(m),r.forEach(m),this.h()},h(){_(o,"class","btLabel svelte-fv5v0u"),_(e,"class","buttonWrapper svelte-fv5v0u"),P(e,"background","var("+t[0]+")")},m(a,r){z(a,e,r),f(e,o),f(o,s)},p(a,[r]){r&2&&F(s,a[1]),r&1&&P(e,"background","var("+a[0]+")")},i:v,o:v,d(a){a&&m(e)}}}function Q(t,e,o){let{bgColor:s}=e,{label:a}=e;return t.$$set=r=>{"bgColor"in r&&o(0,s=r.bgColor),"label"in r&&o(1,a=r.label)},[s,a]}class I extends M{constructor(e){super(),D(this,e,Q,J,K,{bgColor:0,label:1})}}I.__docgen={version:3,name:"Button.svelte",data:[{keywords:[{name:"default",description:"--strawberry-pink"},{name:"type",description:"string"}],visibility:"public",description:"ボタンカラー、CCLVividColorの中から選ぶ",name:"bgColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"default",description:"Button"},{name:"type",description:"string"}],visibility:"public",description:"ボタンの中に表示するテキスト",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const oe={title:"Common/Button",component:I,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{onClick:H("clicked")}},l={args:{bgColor:n.STRAWBERRY_PINK,label:"Strawberry　Pink"}},i={args:{bgColor:n.PINEAPPLE_YELLOW,label:"Pineapple Yellow"}},c={args:{bgColor:n.SODA_BLUE,label:"Soda Blue"}},p={args:{bgColor:n.MELON_GREEN,label:"Melon Green"}},d={args:{bgColor:n.GRAPE_PURPLE,label:"Grape Purple"}},u={args:{bgColor:n.WRAP_GREY,label:"Wrap Grey"}};var E,L,k;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
    label: "Strawberry　Pink"
  }
}`,...(k=(L=l.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var S,G,R;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.PINEAPPLE_YELLOW,
    label: "Pineapple Yellow"
  }
}`,...(R=(G=i.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var h,B,A;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.SODA_BLUE,
    label: "Soda Blue"
  }
}`,...(A=(B=c.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var w,N,Y;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.MELON_GREEN,
    label: "Melon Green"
  }
}`,...(Y=(N=p.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var W,O,V;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.GRAPE_PURPLE,
    label: "Grape Purple"
  }
}`,...(V=(O=d.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var T,U,x;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.WRAP_GREY,
    label: "Wrap Grey"
  }
}`,...(x=(U=u.parameters)==null?void 0:U.docs)==null?void 0:x.source}}};const se=["Pink","Yellow","Blue","Green","Purple","Grey"];export{c as Blue,p as Green,u as Grey,l as Pink,d as Purple,i as Yellow,se as __namedExportsOrder,oe as default};
