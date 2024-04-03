import{S as z,i as H,s as J,e as E,t as Q,c as b,a as g,b as X,d as C,f as B,g as A,h as Z,j as _,k as $,n as y}from"./index-5bf62044.js";import{C as o}from"./config-9a519810.js";import{a as ee}from"./chunk-MZXVCX43-aa6c8130.js";import"./lifecycle-4aaf5bd1.js";import"./v4-4a60fe23.js";function re(t){let e,a,s;return{c(){e=E("button"),a=E("span"),s=Q(t[1]),this.h()},l(u){e=b(u,"BUTTON",{class:!0,style:!0});var r=g(e);a=b(r,"SPAN",{class:!0});var m=g(a);s=X(m,t[1]),m.forEach(C),r.forEach(C),this.h()},h(){B(a,"class","btLabel svelte-h8w991"),B(e,"class","buttonWrapper svelte-h8w991"),A(e,"--bgColor","var("+t[0]+")")},m(u,r){Z(u,e,r),_(e,a),_(a,s)},p(u,[r]){r&2&&$(s,u[1]),r&1&&A(e,"--bgColor","var("+u[0]+")")},i:y,o:y,d(u){u&&C(e)}}}function oe(t,e,a){let{bgColor:s}=e,{label:u}=e;return t.$$set=r=>{"bgColor"in r&&a(0,s=r.bgColor),"label"in r&&a(1,u=r.label)},[s,u]}class q extends z{constructor(e){super(),H(this,e,oe,re,J,{bgColor:0,label:1})}}q.__docgen={version:3,name:"Button.svelte",data:[{keywords:[{name:"default",description:"--strawberry-pink"},{name:"type",description:"string"}],visibility:"public",description:"ボタンカラー、CCLVividColorの中から選ぶ",name:"bgColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"default",description:"Button"},{name:"type",description:"string"}],visibility:"public",description:"ボタンの中に表示するテキスト",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const le={title:"Common/Button",component:q,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{onClick:ee("clicked"),bgColor:{control:{type:"select"},options:[o.STRAWBERRY_PINK,o.PINEAPPLE_YELLOW,o.SODA_BLUE,o.MELON_GREEN,o.GRAPE_PURPLE,o.WRAP_GREY]}}},n={args:{bgColor:o.STRAWBERRY_PINK,label:"Strawberry　Pink"}},l={args:{bgColor:o.PINEAPPLE_YELLOW,label:"Pineapple Yellow"}},i={args:{bgColor:o.SODA_BLUE,label:"Soda Blue"}},c={args:{bgColor:o.MELON_GREEN,label:"Melon Green"}},p={args:{bgColor:o.GRAPE_PURPLE,label:"Grape Purple"}},d={args:{bgColor:o.WRAP_GREY,label:"Wrap Grey"}};var P,f,L,F,R;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
    label: "Strawberry　Pink"
  }
}`,...(L=(f=n.parameters)==null?void 0:f.docs)==null?void 0:L.source},description:{story:`サービス、サークルのメインカラー

意思決定の場で、「次へ」や「OK」など、肯定の同意を得るときに使用します。

Services, main colours of the circle.

Used in decision-making situations to obtain agreement of affirmation, e.g. 'Next' or 'OK'.`,...(R=(F=n.parameters)==null?void 0:F.docs)==null?void 0:R.description}}};var v,h,D,S,G;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.PINEAPPLE_YELLOW,
    label: "Pineapple Yellow"
  }
}`,...(D=(h=l.parameters)==null?void 0:h.docs)==null?void 0:D.source},description:{story:`意思決定の場で、ヘルプやユーザーの補助を行う情報を提示するときに使用します。中立カラーです。

Used when presenting information to help or assist users in decision-making. Neutral colour.`,...(G=(S=l.parameters)==null?void 0:S.docs)==null?void 0:G.description}}};var k,w,N,O,Y;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.SODA_BLUE,
    label: "Soda Blue"
  }
}`,...(N=(w=i.parameters)==null?void 0:w.docs)==null?void 0:N.source},description:{story:`意思決定の場で、キャンセルや取りやめなどの否定的な意思決定を行うボタンで使用します。

Used in decision-making situations with buttons for negative decisions such as cancel or withdraw.`,...(Y=(O=i.parameters)==null?void 0:O.docs)==null?void 0:Y.description}}};var W,U,V;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.MELON_GREEN,
    label: "Melon Green"
  }
}`,...(V=(U=c.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var I,T,x;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.GRAPE_PURPLE,
    label: "Grape Purple"
  }
}`,...(x=(T=p.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var K,M,j;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    bgColor: CCLVividColor.WRAP_GREY,
    label: "Wrap Grey"
  }
}`,...(j=(M=d.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};const ie=["Pink","Yellow","Blue","Green","Purple","Grey"];export{i as Blue,c as Green,d as Grey,n as Pink,p as Purple,l as Yellow,ie as __namedExportsOrder,le as default};
