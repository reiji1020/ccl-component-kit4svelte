import{S as V,i as k,s as I,e as u,t as _,c as f,a as v,b as y,d as p,f as E,g as L,h as T,j as i,n as S}from"./index-2408e6ca.js";import{C as h}from"./config-9a519810.js";import"./lifecycle-4aaf5bd1.js";function B(s){let o,r,e,c,l,a;return{c(){o=u("footer"),r=u("div"),e=u("span"),c=_("Copyright © 2015-"),l=_(s[1]),a=_(" CANDY CHUPS Lab. All Rights Reserved."),this.h()},l(t){o=f(t,"FOOTER",{});var n=v(o);r=f(n,"DIV",{class:!0,style:!0});var b=v(r);e=f(b,"SPAN",{class:!0});var d=v(e);c=y(d,"Copyright © 2015-"),l=y(d,s[1]),a=y(d," CANDY CHUPS Lab. All Rights Reserved."),d.forEach(p),b.forEach(p),n.forEach(p),this.h()},h(){E(e,"class","copy svelte-1wxgi1"),E(r,"class","wrapper svelte-1wxgi1"),L(r,"--bgColor","var("+s[0]+")")},m(t,n){T(t,o,n),i(o,r),i(r,e),i(e,c),i(e,l),i(e,a)},p(t,[n]){n&1&&L(r,"--bgColor","var("+t[0]+")")},i:S,o:S,d(t){t&&p(o)}}}function U(s,o,r){let{bgColor:e}=o;const l=new Date().getFullYear();return s.$$set=a=>{"bgColor"in a&&r(0,e=a.bgColor)},[e,l]}class F extends V{constructor(o){super(),k(this,o,U,B,I,{bgColor:0})}}F.__docgen={version:3,name:"Footer.svelte",data:[{keywords:[{name:"default",description:"--strawberry-pink"},{name:"type",description:"string"}],visibility:"public",description:`フッター背景色
CCLVividColorの中から指定する`,name:"bgColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const j={title:"Common/Footer",component:F,tags:["autodocs"],parameters:{layout:"fullscreen"}},C={args:{bgColor:h.STRAWBERRY_PINK}},m={args:{bgColor:h.PINEAPPLE_YELLOW}},g={args:{bgColor:h.SODA_BLUE}};var A,P,R;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK
  }
}`,...(R=(P=C.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var D,w,N;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.PINEAPPLE_YELLOW
  }
}`,...(N=(w=m.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var O,Y,x;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.SODA_BLUE
  }
}`,...(x=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:x.source}}};const q=["Default","SecondColor","ThirdColor"];export{C as Default,m as SecondColor,g as ThirdColor,q as __namedExportsOrder,j as default};
