import{S as Z,i as $,s as ee,e as v,t as te,c as P,b as O,f as re,g as b,h,j as R,k as oe,l as S,m as ae,n as L}from"./index-1f603ac2.js";import{C as s}from"./config-d1dd158c.js";import{I as ne}from"./preview-errors-60885292.js";import{v as se}from"./v4-4a60fe23.js";import"./lifecycle-4aaf5bd1.js";import"./index-356e4a49.js";function le(r){let e,t,o;return{c(){e=v("button"),t=v("span"),o=te(r[1]),this.h()},l(a){e=P(a,"BUTTON",{class:!0,style:!0});var n=O(e);t=P(n,"SPAN",{class:!0});var i=O(t);o=re(i,r[1]),i.forEach(b),n.forEach(b),this.h()},h(){h(t,"class","btLabel svelte-fv5v0u"),h(e,"class","buttonWrapper svelte-fv5v0u"),R(e,"background","var("+r[0]+")")},m(a,n){oe(a,e,n),S(e,t),S(t,o)},p(a,[n]){n&2&&ae(o,a[1]),n&1&&R(e,"background","var("+a[0]+")")},i:L,o:L,d(a){a&&b(e)}}}function ie(r,e,t){let{bgColor:o}=e,{label:a}=e;return r.$$set=n=>{"bgColor"in n&&t(0,o=n.bgColor),"label"in n&&t(1,a=n.label)},[o,a]}class q extends Z{constructor(e){super(),$(this,e,ie,le,ee,{bgColor:0,label:1})}}q.__docgen={version:3,name:"Button.svelte",data:[{keywords:[{name:"default",description:"--strawberry-pink"},{name:"type",description:"string"}],visibility:"public",description:"ボタンカラー、CCLVividColorの中から選ぶ",name:"bgColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"default",description:"Button"},{name:"type",description:"string"}],visibility:"public",description:"ボタンの中に表示するテキスト",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const{addons:ce}=__STORYBOOK_MODULE_PREVIEW_API__,{global:w}=__STORYBOOK_MODULE_GLOBAL__;var pe="storybook/actions",de=`${pe}/action-event`,ue={depth:10,clearOnStoryChange:!0,limit:50},H=(r,e)=>{let t=Object.getPrototypeOf(r);return!t||e(t)?t:H(t,e)},me=r=>!!(typeof r=="object"&&r&&H(r,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof r.persist=="function"),ge=r=>{if(me(r)){let e=Object.create(r.constructor.prototype,Object.getOwnPropertyDescriptors(r));e.persist();let t=Object.getOwnPropertyDescriptor(e,"view"),o=t==null?void 0:t.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...t,value:Object.create(o.constructor.prototype)}),e}return r},be=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?se():Date.now().toString(36)+Math.random().toString(36).substring(2);function _e(r,e={}){let t={...ue,...e},o=function(...a){var y,C;if(e.implicit){let f=(y="__STORYBOOK_PREVIEW__"in w?w.__STORYBOOK_PREVIEW__:void 0)==null?void 0:y.storyRenders.find(l=>l.phase==="playing"||l.phase==="rendering");if(f){let l=!((C=window==null?void 0:window.FEATURES)!=null&&C.disallowImplicitActionsInRenderV8),E=new ne({phase:f.phase,name:r,deprecated:l});if(l)console.warn(E);else throw E}}let n=ce.getChannel(),i=be(),J=5,_=a.map(ge),Q=a.length>1?_:_[0],X={id:i,count:0,data:{name:r,args:Q},options:{...t,maxDepth:J+(t.depth||3),allowFunction:t.allowFunction||!1}};n.emit(de,X)};return o.isAction=!0,o}const Oe={title:"Common/Button",component:q,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{onClick:_e("clicked")}},c={args:{bgColor:s.STRAWBERRY_PINK,label:"Strawberry　Pink"}},p={args:{bgColor:s.PINEAPPLE_YELLOW,label:"Pineapple Yellow"}},d={args:{bgColor:s.SODA_BLUE,label:"Soda Blue"}},u={args:{bgColor:s.MELON_GREEN,label:"Melon Green"}},m={args:{bgColor:s.GRAPE_PURPLE,label:"Grape Purple"}},g={args:{bgColor:s.WRAP_GREY,label:"Wrap Grey"}};var A,B,k;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
    label: "Strawberry　Pink"
  }
}`,...(k=(B=c.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var G,I,D;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.PINEAPPLE_YELLOW,
    label: "Pineapple Yellow"
  }
}`,...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var V,Y,W;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.SODA_BLUE,
    label: "Soda Blue"
  }
}`,...(W=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:W.source}}};var N,T,j;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.MELON_GREEN,
    label: "Melon Green"
  }
}`,...(j=(T=u.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var U,M,K;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.GRAPE_PURPLE,
    label: "Grape Purple"
  }
}`,...(K=(M=m.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var x,z,F;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.WRAP_GREY,
    label: "Wrap Grey"
  }
}`,...(F=(z=g.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};const he=["Pink","Yellow","Blue","Green","Purple","Grey"];export{d as Blue,u as Green,g as Grey,c as Pink,m as Purple,p as Yellow,he as __namedExportsOrder,Oe as default};
