import{S as W,i as x,s as B,e as u,t as E,c as f,a as v,b as y,d as C,f as L,g as b,h as F,j as c,n as P}from"./index-5bf62044.js";import{C as t}from"./config-9a519810.js";import"./lifecycle-4aaf5bd1.js";function U(a){let o,r,e,d,i,n;return{c(){o=u("footer"),r=u("div"),e=u("span"),d=E("Copyright © 2015-"),i=E(a[1]),n=E(" CANDY CHUPS Lab. All Rights Reserved."),this.h()},l(s){o=f(s,"FOOTER",{});var l=v(o);r=f(l,"DIV",{class:!0,style:!0});var h=v(r);e=f(h,"SPAN",{class:!0});var p=v(e);d=y(p,"Copyright © 2015-"),i=y(p,a[1]),n=y(p," CANDY CHUPS Lab. All Rights Reserved."),p.forEach(C),h.forEach(C),l.forEach(C),this.h()},h(){L(e,"class","copy svelte-1wxgi1"),L(r,"class","wrapper svelte-1wxgi1"),b(r,"--bgColor","var("+a[0]+")")},m(s,l){F(s,o,l),c(o,r),c(r,e),c(e,d),c(e,i),c(e,n)},p(s,[l]){l&1&&b(r,"--bgColor","var("+s[0]+")")},i:P,o:P,d(s){s&&C(o)}}}function V(a,o,r){let{bgColor:e}=o;const i=new Date().getFullYear();return a.$$set=n=>{"bgColor"in n&&r(0,e=n.bgColor)},[e,i]}class T extends W{constructor(o){super(),x(this,o,V,U,B,{bgColor:0})}}T.__docgen={version:3,name:"Footer.svelte",data:[{keywords:[{name:"default",description:"--strawberry-pink"},{name:"type",description:"string"}],visibility:"public",description:`フッター背景色
CCLVividColorの中から指定する`,name:"bgColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const H={title:"Common/Footer",component:T,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{bgColor:{control:{type:"select"},options:[t.STRAWBERRY_PINK,t.PINEAPPLE_YELLOW,t.SODA_BLUE,t.MELON_GREEN,t.GRAPE_PURPLE,t.WRAP_GREY]}}},g={args:{bgColor:t.STRAWBERRY_PINK}},m={args:{bgColor:t.PINEAPPLE_YELLOW}},_={args:{bgColor:t.SODA_BLUE}};var R,A,S;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK
  }
}`,...(S=(A=g.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var N,O,Y;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.PINEAPPLE_YELLOW
  }
}`,...(Y=(O=m.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var D,w,I;_.parameters={..._.parameters,docs:{...(D=_.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.SODA_BLUE
  }
}`,...(I=(w=_.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const j=["Default","SecondColor","ThirdColor"];export{g as Default,m as SecondColor,_ as ThirdColor,j as __namedExportsOrder,H as default};
