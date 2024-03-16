import{S as P,i as w,s as A,e as y,c as g,a as B,d as b,o as f,f as o,g as l,h as I,j as R,n as C}from"./index-d68b0b26.js";import{C as p}from"./config-9a519810.js";import"./lifecycle-4aaf5bd1.js";function Y(s){let r,e,n;return{c(){r=y("div"),e=y("img"),this.h()},l(t){r=g(t,"DIV",{class:!0,style:!0});var a=B(r);e=g(a,"IMG",{src:!0,alt:!0,class:!0,style:!0}),a.forEach(b),this.h()},h(){f(e.src,n=s[2])||o(e,"src",n),o(e,"alt",s[3]),o(e,"class","Thumbnail svelte-136olvh"),l(e,"--borderColor","var("+s[1]+")"),o(r,"class","ThumbnailWrapper svelte-136olvh"),l(r,"--imageSize",s[0])},m(t,a){I(t,r,a),R(r,e)},p(t,[a]){a&4&&!f(e.src,n=t[2])&&o(e,"src",n),a&8&&o(e,"alt",t[3]),a&2&&l(e,"--borderColor","var("+t[1]+")"),a&1&&l(r,"--imageSize",t[0])},i:C,o:C,d(t){t&&b(r)}}}function D(s,r,e){let{imageSize:n}=r,{borderColor:t}=r,{src:a}=r,{altText:u}=r;return s.$$set=i=>{"imageSize"in i&&e(0,n=i.imageSize),"borderColor"in i&&e(1,t=i.borderColor),"src"in i&&e(2,a=i.src),"altText"in i&&e(3,u=i.altText)},[n,t,a,u]}class L extends P{constructor(r){super(),w(this,r,D,Y,A,{imageSize:0,borderColor:1,src:2,altText:3})}}L.__docgen={version:3,name:"Thumbnail.svelte",data:[{keywords:[{name:"type",description:"number"}],visibility:"public",description:"サムネイル画像の大きさ",name:"imageSize",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"default",description:"--strawberry-pink"},{name:"type",description:"string"}],visibility:"public",description:"枠線の色",name:"borderColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"画像ソース",name:"src",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"string"}],visibility:"public",description:"alt属性に指定する値",name:"altText",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const N={title:"Common/Thumbnail",component:L,tags:["autodocs"],parameters:{layout:"fullscreen"}},c={args:{borderColor:p.STRAWBERRY_PINK,altText:"Strawberry Pink",imageSize:"120px",src:"thumbnail.png"}},d={args:{borderColor:p.PINEAPPLE_YELLOW,altText:"Pineapple Yellow",imageSize:"120px",src:"thumbnail.png"}},m={args:{borderColor:p.SODA_BLUE,altText:"Soda Blue",imageSize:"120px",src:"thumbnail.png"}};var h,S,_;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.STRAWBERRY_PINK,
    altText: "Strawberry Pink",
    imageSize: "120px",
    src: "thumbnail.png"
  }
}`,...(_=(S=c.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var v,T,x;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.PINEAPPLE_YELLOW,
    altText: "Pineapple Yellow",
    imageSize: "120px",
    src: "thumbnail.png"
  }
}`,...(x=(T=d.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var k,z,E;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    borderColor: CCLVividColor.SODA_BLUE,
    altText: "Soda Blue",
    imageSize: "120px",
    src: "thumbnail.png"
  }
}`,...(E=(z=m.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};const q=["Default","SecondColor","ThirdColor"];export{c as Default,d as SecondColor,m as ThirdColor,q as __namedExportsOrder,N as default};
