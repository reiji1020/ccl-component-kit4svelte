import{S as Z,i as $,s as ee,e as P,t as te,c as O,b as h,f as oe,g as y,h as c,j as R,k as re,l as k,m as ne,n as S}from"./index-1f603ac2.js";import{C as l}from"./config-d1dd158c.js";import{I as ae}from"./preview-errors-60885292.js";import{v as se}from"./v4-4a60fe23.js";import"./lifecycle-4aaf5bd1.js";import"./index-356e4a49.js";function le(o){let e,t,r;return{c(){e=P("button"),t=P("span"),r=te(o[2]),this.h()},l(n){e=O(n,"BUTTON",{class:!0,style:!0,onclick:!0});var a=h(e);t=O(a,"SPAN",{class:!0});var s=h(t);r=oe(s,o[2]),s.forEach(y),a.forEach(y),this.h()},h(){c(t,"class","btLabel svelte-fv5v0u"),c(e,"class","buttonWrapper svelte-fv5v0u"),R(e,"background","var("+o[0]+")"),c(e,"onclick",o[1])},m(n,a){re(n,e,a),k(e,t),k(t,r)},p(n,[a]){a&4&&ne(r,n[2]),a&1&&R(e,"background","var("+n[0]+")"),a&2&&c(e,"onclick",n[1])},i:S,o:S,d(n){n&&y(e)}}}function ie(o,e,t){let{bgColor:r}=e,{onclick:n}=e,{label:a}=e;return o.$$set=s=>{"bgColor"in s&&t(0,r=s.bgColor),"onclick"in s&&t(1,n=s.onclick),"label"in s&&t(2,a=s.label)},[r,n,a]}class q extends Z{constructor(e){super(),$(this,e,ie,le,ee,{bgColor:0,onclick:1,label:2})}}q.__docgen={version:3,name:"Button.svelte",data:[{keywords:[{name:"default",description:"--strawberry-pink"},{name:"type",description:"string"}],visibility:"public",description:"ボタンカラー、CCLVividColorの中から選ぶ",name:"bgColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"default",description:"void"},{name:"type",description:"void"}],visibility:"public",description:"クリックイベント",name:"onclick",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"default",description:"Button"},{name:"type",description:"string"}],visibility:"public",description:"ボタンの中に表示するテキスト",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const{addons:ce}=__STORYBOOK_MODULE_PREVIEW_API__,{global:L}=__STORYBOOK_MODULE_GLOBAL__;var pe="storybook/actions",de=`${pe}/action-event`,ue={depth:10,clearOnStoryChange:!0,limit:50},H=(o,e)=>{let t=Object.getPrototypeOf(o);return!t||e(t)?t:H(t,e)},me=o=>!!(typeof o=="object"&&o&&H(o,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof o.persist=="function"),ge=o=>{if(me(o)){let e=Object.create(o.constructor.prototype,Object.getOwnPropertyDescriptors(o));e.persist();let t=Object.getOwnPropertyDescriptor(e,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...t,value:Object.create(r.constructor.prototype)}),e}return o},be=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?se():Date.now().toString(36)+Math.random().toString(36).substring(2);function ye(o,e={}){let t={...ue,...e},r=function(...n){var f,C;if(e.implicit){let E=(f="__STORYBOOK_PREVIEW__"in L?L.__STORYBOOK_PREVIEW__:void 0)==null?void 0:f.storyRenders.find(i=>i.phase==="playing"||i.phase==="rendering");if(E){let i=!((C=window==null?void 0:window.FEATURES)!=null&&C.disallowImplicitActionsInRenderV8),v=new ae({phase:E.phase,name:o,deprecated:i});if(i)console.warn(v);else throw v}}let a=ce.getChannel(),s=be(),J=5,_=n.map(ge),Q=n.length>1?_:_[0],X={id:s,count:0,data:{name:o,args:Q},options:{...t,maxDepth:J+(t.depth||3),allowFunction:t.allowFunction||!1}};a.emit(de,X)};return r.isAction=!0,r}const Oe={title:"Common/Button",component:q,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{onClick:ye("clicked")}},p={args:{bgColor:l.STRAWBERRY_PINK,label:"Strawberry　Pink"}},d={args:{bgColor:l.PINEAPPLE_YELLOW,label:"Pineapple Yellow"}},u={args:{bgColor:l.SODA_BLUE,label:"Soda Blue"}},m={args:{bgColor:l.MELON_GREEN,label:"Melon Green"}},g={args:{bgColor:l.GRAPE_PURPLE,label:"Grape Purple"}},b={args:{bgColor:l.WRAP_GREY,label:"Wrap Grey"}};var w,A,B;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
    label: "Strawberry　Pink"
  }
}`,...(B=(A=p.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var G,I,D;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.PINEAPPLE_YELLOW,
    label: "Pineapple Yellow"
  }
}`,...(D=(I=d.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var V,Y,W;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.SODA_BLUE,
    label: "Soda Blue"
  }
}`,...(W=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:W.source}}};var N,T,j;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.MELON_GREEN,
    label: "Melon Green"
  }
}`,...(j=(T=m.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var U,M,K;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.GRAPE_PURPLE,
    label: "Grape Purple"
  }
}`,...(K=(M=g.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var x,z,F;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.WRAP_GREY,
    label: "Wrap Grey"
  }
}`,...(F=(z=b.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};const he=["Pink","Yellow","Blue","Green","Purple","Grey"];export{u as Blue,m as Green,b as Grey,p as Pink,g as Purple,d as Yellow,he as __namedExportsOrder,Oe as default};
