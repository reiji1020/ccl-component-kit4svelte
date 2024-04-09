import{S as T,i as x,s as G,e as g,t as E,c as _,a as A,b as y,d as m,f as v,g as f,h as K,j as l,n as B}from"./index-5bf62044.js";import{C as u}from"./config-088799f1.js";import"./lifecycle-4aaf5bd1.js";function j(s){let o,r,e,p,i,a;return{c(){o=g("footer"),r=g("div"),e=g("span"),p=E("Copyright © 2015-"),i=E(s[1]),a=E(" CANDY CHUPS Lab. All Rights Reserved."),this.h()},l(t){o=_(t,"FOOTER",{});var n=A(o);r=_(n,"DIV",{class:!0,style:!0});var b=A(r);e=_(b,"SPAN",{class:!0});var F=A(e);p=y(F,"Copyright © 2015-"),i=y(F,s[1]),a=y(F," CANDY CHUPS Lab. All Rights Reserved."),F.forEach(m),b.forEach(m),n.forEach(m),this.h()},h(){v(e,"class","copy svelte-7cb0bt"),v(r,"class","wrapper svelte-7cb0bt"),f(r,"--bgColor","var("+s[0]+")")},m(t,n){K(t,o,n),l(o,r),l(r,e),l(e,p),l(e,i),l(e,a)},p(t,[n]){n&1&&f(r,"--bgColor","var("+t[0]+")")},i:B,o:B,d(t){t&&m(o)}}}function q(s,o,r){let{bgColor:e}=o;const i=new Date().getFullYear();return s.$$set=a=>{"bgColor"in a&&r(0,e=a.bgColor)},[e,i]}class H extends T{constructor(o){super(),x(this,o,q,j,G,{bgColor:0})}}H.__docgen={version:3,name:"Footer.svelte",data:[{keywords:[{name:"default",description:"--strawberry-pink"},{name:"type",description:"string"}],visibility:"public",description:`フッター背景色
CCLVividColorの中から指定する`,name:"bgColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Q={title:"Common/Footer",component:H,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{bgColor:{control:{type:"select"},options:[u.STRAWBERRY_PINK,u.PINEAPPLE_YELLOW,u.SODA_BLUE,u.MELON_GREEN,u.GRAPE_PURPLE,u.WRAP_GREY]}}},c={args:{bgColor:u.STRAWBERRY_PINK}},d={args:{bgColor:u.PINEAPPLE_YELLOW}},C={args:{bgColor:u.SODA_BLUE}};var D,L,P,h,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK
  }
}`,...(P=(L=c.parameters)==null?void 0:L.docs)==null?void 0:P.source},description:{story:`通常カラー、基本的にはこの色を使用する

必ずHeaderコンポーネントの色と揃えて使用する`,...(R=(h=c.parameters)==null?void 0:h.docs)==null?void 0:R.description}}};var S,Y,N,O,k;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.PINEAPPLE_YELLOW
  }
}`,...(N=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:N.source},description:{story:`サブカラー、ピンクが使用できない時に使う

必ずHeaderコンポーネントの色と揃えて使用する`,...(k=(O=d.parameters)==null?void 0:O.docs)==null?void 0:k.description}}};var w,I,W,U,V;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.SODA_BLUE
  }
}`,...(W=(I=C.parameters)==null?void 0:I.docs)==null?void 0:W.source},description:{story:`ピンク、イエローが使えない時に使う

必ずHeaderコンポーネントの色と揃えて使用する`,...(V=(U=C.parameters)==null?void 0:U.docs)==null?void 0:V.description}}};const X=["Pink","Yellow","Blue"];export{C as Blue,c as Pink,d as Yellow,X as __namedExportsOrder,Q as default};
