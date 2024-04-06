import{S as B,i as F,s as U,e as u,t as E,c as b,a as f,b as v,d as C,f as h,g as L,h as V,j as c,n as P}from"./index-5bf62044.js";import{C as t}from"./config-088799f1.js";import"./lifecycle-4aaf5bd1.js";function k(a){let o,r,e,d,i,n;return{c(){o=u("footer"),r=u("div"),e=u("span"),d=E("Copyright © 2015-"),i=E(a[1]),n=E(" CANDY CHUPS Lab. All Rights Reserved."),this.h()},l(s){o=b(s,"FOOTER",{});var l=f(o);r=b(l,"DIV",{class:!0,style:!0});var y=f(r);e=b(y,"SPAN",{class:!0});var p=f(e);d=v(p,"Copyright © 2015-"),i=v(p,a[1]),n=v(p," CANDY CHUPS Lab. All Rights Reserved."),p.forEach(C),y.forEach(C),l.forEach(C),this.h()},h(){h(e,"class","copy svelte-7cb0bt"),h(r,"class","wrapper svelte-7cb0bt"),L(r,"--bgColor","var("+a[0]+")")},m(s,l){V(s,o,l),c(o,r),c(r,e),c(e,d),c(e,i),c(e,n)},p(s,[l]){l&1&&L(r,"--bgColor","var("+s[0]+")")},i:P,o:P,d(s){s&&C(o)}}}function w(a,o,r){let{bgColor:e}=o;const i=new Date().getFullYear();return a.$$set=n=>{"bgColor"in n&&r(0,e=n.bgColor)},[e,i]}class W extends B{constructor(o){super(),F(this,o,w,k,U,{bgColor:0})}}W.__docgen={version:3,name:"Footer.svelte",data:[{keywords:[{name:"default",description:"--strawberry-pink"},{name:"type",description:"string"}],visibility:"public",description:`フッター背景色
CCLVividColorの中から指定する`,name:"bgColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const H={title:"Common/Footer",component:W,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{bgColor:{control:{type:"select"},options:[t.STRAWBERRY_PINK,t.PINEAPPLE_YELLOW,t.SODA_BLUE,t.MELON_GREEN,t.GRAPE_PURPLE,t.WRAP_GREY]}}},m={args:{bgColor:t.STRAWBERRY_PINK}},g={args:{bgColor:t.PINEAPPLE_YELLOW}},_={args:{bgColor:t.SODA_BLUE}};var R,A,S;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK
  }
}`,...(S=(A=m.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var N,O,Y;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.PINEAPPLE_YELLOW
  }
}`,...(Y=(O=g.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var D,I,T;_.parameters={..._.parameters,docs:{...(D=_.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.SODA_BLUE
  }
}`,...(T=(I=_.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const j=["Default","SecondColor","ThirdColor"];export{m as Default,g as SecondColor,_ as ThirdColor,j as __namedExportsOrder,H as default};
