import{S as z,i as R,s as A,e as y,c as g,a as w,d as b,o as C,f as l,g as c,h as Y,j as B,n as _}from"./index-5bf62044.js";import{C as i}from"./config-9a519810.js";import"./lifecycle-4aaf5bd1.js";function I(s){let t,e,n;return{c(){t=y("div"),e=y("img"),this.h()},l(r){t=g(r,"DIV",{class:!0,style:!0});var a=w(t);e=g(a,"IMG",{src:!0,alt:!0,class:!0,style:!0}),a.forEach(b),this.h()},h(){C(e.src,n=s[2])||l(e,"src",n),l(e,"alt",s[3]),l(e,"class","Thumbnail svelte-136olvh"),c(e,"--borderColor","var("+s[1]+")"),l(t,"class","ThumbnailWrapper svelte-136olvh"),c(t,"--imageSize",s[0])},m(r,a){Y(r,t,a),B(t,e)},p(r,[a]){a&4&&!C(e.src,n=r[2])&&l(e,"src",n),a&8&&l(e,"alt",r[3]),a&2&&c(e,"--borderColor","var("+r[1]+")"),a&1&&c(t,"--imageSize",r[0])},i:_,o:_,d(r){r&&b(t)}}}function N(s,t,e){let{imageSize:n}=t,{borderColor:r}=t,{src:a}=t,{altText:u}=t;return s.$$set=o=>{"imageSize"in o&&e(0,n=o.imageSize),"borderColor"in o&&e(1,r=o.borderColor),"src"in o&&e(2,a=o.src),"altText"in o&&e(3,u=o.altText)},[n,r,a,u]}class k extends z{constructor(t){super(),R(this,t,N,I,A,{imageSize:0,borderColor:1,src:2,altText:3})}}k.__docgen={version:3,name:"Thumbnail.svelte",data:[{keywords:[{name:"type",description:"number"}],visibility:"public",description:"サムネイル画像の大きさ",name:"imageSize",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"default",description:"--strawberry-pink"},{name:"type",description:"string"}],visibility:"public",description:"枠線の色",name:"borderColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"画像ソース",name:"src",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"alt属性に指定する値",name:"altText",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const V={title:"Common/Thumbnail",component:k,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{borderColor:{control:{type:"select"},options:[i.STRAWBERRY_PINK,i.PINEAPPLE_YELLOW,i.SODA_BLUE,i.MELON_GREEN,i.GRAPE_PURPLE,i.WRAP_GREY]},altText:{control:{type:"text"}},imageSize:{control:{type:"text"}},src:{control:{type:"text"}}}},d={args:{borderColor:i.STRAWBERRY_PINK,altText:"Strawberry Pink",imageSize:"120px",src:"thumbnail.png"}},m={args:{borderColor:i.PINEAPPLE_YELLOW,altText:"Pineapple Yellow",imageSize:"120px",src:"thumbnail.png"}},p={args:{borderColor:i.SODA_BLUE,altText:"Soda Blue",imageSize:"120px",src:"thumbnail.png"}};var f,S,h;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.STRAWBERRY_PINK,
    altText: "Strawberry Pink",
    imageSize: "120px",
    src: "thumbnail.png"
  }
}`,...(h=(S=d.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var T,E,v;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.PINEAPPLE_YELLOW,
    altText: "Pineapple Yellow",
    imageSize: "120px",
    src: "thumbnail.png"
  }
}`,...(v=(E=m.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var x,P,L;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.SODA_BLUE,
    altText: "Soda Blue",
    imageSize: "120px",
    src: "thumbnail.png"
  }
}`,...(L=(P=p.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};const G=["Default","SecondColor","ThirdColor"];export{d as Default,m as SecondColor,p as ThirdColor,G as __namedExportsOrder,V as default};
