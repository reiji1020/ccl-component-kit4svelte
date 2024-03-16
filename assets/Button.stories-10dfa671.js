import{S as M,i as D,s as K,e as C,t as j,c as g,a as y,b as q,d as m,f as _,g as P,h as z,j as E,k as F,n as f}from"./index-d68b0b26.js";import{C as l}from"./config-9a519810.js";import{a as H}from"./chunk-MZXVCX43-aa6c8130.js";import"./lifecycle-4aaf5bd1.js";import"./v4-4a60fe23.js";function J(t){let e,o,s;return{c(){e=C("button"),o=C("span"),s=j(t[1]),this.h()},l(a){e=g(a,"BUTTON",{class:!0,style:!0});var r=y(e);o=g(r,"SPAN",{class:!0});var b=y(o);s=q(b,t[1]),b.forEach(m),r.forEach(m),this.h()},h(){_(o,"class","btLabel svelte-h8w991"),_(e,"class","buttonWrapper svelte-h8w991"),P(e,"--bgColor","var("+t[0]+")")},m(a,r){z(a,e,r),E(e,o),E(o,s)},p(a,[r]){r&2&&F(s,a[1]),r&1&&P(e,"--bgColor","var("+a[0]+")")},i:f,o:f,d(a){a&&m(e)}}}function Q(t,e,o){let{bgColor:s}=e,{label:a}=e;return t.$$set=r=>{"bgColor"in r&&o(0,s=r.bgColor),"label"in r&&o(1,a=r.label)},[s,a]}class I extends M{constructor(e){super(),D(this,e,Q,J,K,{bgColor:0,label:1})}}I.__docgen={version:3,name:"Button.svelte",data:[{keywords:[{name:"default",description:"--strawberry-pink"},{name:"type",description:"string"}],visibility:"public",description:"ボタンカラー、CCLVividColorの中から選ぶ",name:"bgColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"default",description:"Button"},{name:"type",description:"string"}],visibility:"public",description:"ボタンの中に表示するテキスト",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ae={title:"Common/Button",component:I,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{onClick:H("clicked")}},n={args:{bgColor:l.STRAWBERRY_PINK,label:"Strawberry　Pink"}},i={args:{bgColor:l.PINEAPPLE_YELLOW,label:"Pineapple Yellow"}},c={args:{bgColor:l.SODA_BLUE,label:"Soda Blue"}},p={args:{bgColor:l.MELON_GREEN,label:"Melon Green"}},d={args:{bgColor:l.GRAPE_PURPLE,label:"Grape Purple"}},u={args:{bgColor:l.WRAP_GREY,label:"Wrap Grey"}};var v,L,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
    label: "Strawberry　Pink"
  }
}`,...(S=(L=n.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var h,G,R;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.PINEAPPLE_YELLOW,
    label: "Pineapple Yellow"
  }
}`,...(R=(G=i.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var k,B,w;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.SODA_BLUE,
    label: "Soda Blue"
  }
}`,...(w=(B=c.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var A,N,Y;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(x=(U=u.parameters)==null?void 0:U.docs)==null?void 0:x.source}}};const oe=["Pink","Yellow","Blue","Green","Purple","Grey"];export{c as Blue,p as Green,u as Grey,n as Pink,d as Purple,i as Yellow,oe as __namedExportsOrder,ae as default};
